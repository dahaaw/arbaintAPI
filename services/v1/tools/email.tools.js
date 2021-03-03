"use strict";
const nodemailer = require("nodemailer");
const mailConfig    = require('./../../../config/mail.config');

const sendEmail = async (req,res) => {
    try{    
        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport(mailConfig);

        let info = await transporter.sendMail({
            from: '"Arbaint Store" <arbaintstore@gmail.com>',
            to: "dahaaw@gmail.com, dahaaw13@gmail.com", // list of receivers
            subject: "Hello ✔", 
            html: "klik dong <button style='color:red'>disini</button>",
        });
        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    catch(err){
        console.log(err)
    }
}
module.exports = sendEmail;


