const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/contact', (req, res)=>{
    let data = req.body
    if(data.name.length === 0 || data.email.length === 0 || data.message.length === 0){
        return res.json({msg: "please fill athe the fields"});
    }
        // transpot object
        let smtpTransporter = nodemailer.createTransport({
            service: 'Gmail',
            port:465,
            aut:{
                user: 'abongiletshopi@gmail.com',
                pass: '512256TsG#@#'
            }
        })

        // mailing object
        let mailOptions ={
            from:data.email,
            to:'abongiletshopi@gmail.com',
            subject: 'message from $(data.name)',
            
            html:`
            
            <h3>Information<h3/>
            <ul>
                <li>Name: $(data.name)<li/>
                <li>Email: $(data.email)<li/>
            <ul/>

            <h3>Message<h3/>
            <p>$(data.message)<p/>
            `


        }
        // Transport sending the mail
        smtpTransporter.sendMail(mailOptions,(error)=>{
            try{
                    if(error)
                    return res.status(400).json({msg: "Please fill all the fields!"})
                }
                catch(error){
                    if(error)
                    return res.status(500).json({msg: "The is server error!"})
                    res.status(200).json({msg: "Thank you for contacting Abongile!"})
                }
            })
}) 
module.exports=router