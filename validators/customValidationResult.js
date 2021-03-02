const { validationResult } = require("express-validator")


exports.customValidationResult = (req, res, next) => {
    const result = validationResult(req);
    if(!result.isEmpty()){
        message = {}; 
        for(i=0;i<result.errors.length;i++){
            if(message[result.errors[i].param] === undefined){
                message[result.errors[i].param] = result.errors[i].msg   
                // console.log(result)
            }
        }
        return res.status(422).json({success :false,'status':422, message});  
    } 
    next();
}


