const runModel = require('../../../models');
const {users} = runModel();


exports.profile = async (req,res) => {
    const idUser = res.locals.oauth.user.id;
    const user = await users.findByPk(idUser,{
        attributes:{exclude:['id','client','salt','password']}
    });
    res.status(200).json({
        success: true,
        status: 200,
        data: user
    })
}