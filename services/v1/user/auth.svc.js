const {uyah, encPass, createToken} = require('./encryption.svc');

const runModel = require('./../../../models');
const db = runModel();

exports.findAll = async (req,res) => {
    const user = await db.users.findAll();
    console.log(user);
}

exports.register = async (req,res) => {
    try{
        const username  = req.body.username;
        const email     = req.body.email;
        const password  = req.body.password; 
        const repassword= req.body.repassword; 
        const salt      = uyah(); 
        const first     = req.body.first;
        const last      = req.body.last;
        const birthdate = req.body.birthdate;
        const gender    = req.body.gender;

        const dataUser = {
            point : 0,
            username,
            email,
            salt,
            password : encPass(password,salt),
            first,
            last,
            gender,
            birthdate
        }

        const exUsername = await db.users.findAll({
            where:{username}
        });
        const exEmail = await db.users.findAll({
            where:{email}
        });
        if(password===repassword){
            if(exEmail.length === 0){
                if(exUsername.length === 0){
                    const newUser = await db.users.create(dataUser);
                    createToken(newUser.id,'registration');
                    final = {
                        success : true,
                        code    : 200,
                        data    : newUser
                    }
                }else{
                    final = {
                        success : false,
                        code    : 200,
                        message : 'username sudah pernah digunakan'
                    }
                }
            }else{
                final = {
                    success : false,
                    code    : 200,
                    message : 'Email sudah terdaftar'    
                }
            }
        }else{
            final = {
                success : false,
                code    : 200,
                message : 'password tidak sama'
            }
        }
        res.status(final.code).json(final);
    }
    catch(err){
        res.status(500).json({
            status:false,
            code:500,
            message:err
        })
    }
}