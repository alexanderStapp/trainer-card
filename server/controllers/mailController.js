const {EMAIL, PASSWORD} = process.env
const nodemailer = require('nodemailer');

module.exports = {
    send: async (req, res) => {
        const {username, email} = req.body
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        });
        
        const mailOptions = {
            from: EMAIL,
            to: `${email}`,
            subject: `hi ${username}`,
            text: `<div>
                <p>${username},</p>
                <br>
                <p>thank you so much for creating an account. hopefully you have fun using my app!
                make sure to add your buddies so you can see what pokemon they're looking for. enjoy!</p>
                <br>
                <p>PAKPAK</p>
            </div>`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if(error) {
                res.status(500).send(error);
            } else {
                res.sendStatus(200);
            }
        });
    }
}