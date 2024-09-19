const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/contact', (req, res)=>{
    let data = req.body
    if(data.name.length === 0 || data.email.length === 0 || data.message.length === 0){
        return res.json({msg: "please fill athe the fields"});

        // transpot object
        let smtpTransport = nodemailer.createTransport({
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
    }
}) 
