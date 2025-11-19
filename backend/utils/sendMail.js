import nodemailer from 'nodemailer';
import { configDotenv } from 'dotenv';
configDotenv({ path: './config/config.env'});
const smtpUser = process.env.SMTP_USER
const smtpPassword = process.env.SMTP_PASSWORD;
console.log(smtpUser,smtpPassword);
export const sendMail = async (options) => {
    let emailSent;
    console.log('!!!!!!! smtp Config Checkout$$$$$$$$$$$');
    console.log('!!!!SMTP USER', `${smtpUser ? smtpUser : '***Missing***'}`);
    console.log('!!!!!! SMTP PASSWORD:', `${smtpPassword ? '****Hidden*****' : '****Missing****'}`);
    console.log('******************************************')
    if (!smtpPassword || !smtpUser) {
        throw new Error('SMTP Password or User are Missing in Environment Variables');
    }
    // create transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // ssl ,u
        auth: {
            user: smtpUser,
            pass: smtpPassword
        },
        tls: {
            rejectUnauthorized: false //dev Only
        }
    })
    try {
        await transporter.verify();
        console.log('smtp server is ready to send Messages')

    } catch (error) {
        console.error('Error Verifing SMTP Connection', error);
        throw new Error('Smtp Connection Failed' + error.message);
    }
    ///preaparing mail Options
    const mailOptions = {
        from: smtpUser,
        to: options.email,
        subject: options.subject,
        text: options.message,
        html: options.html

    }
    // send Mail
    // let emailSent;
    try {
        const info = await transporter.sendMail( mailOptions );
        console.log('Info are', info);
        console.log(`email sent successfully,${info.response}`)
        console.log(`email sent successfully to: ${mailOptions.to} `);
        emailSent = true;

    } catch (error) {
        console.error('Error Sending Email', error);
        // emailSent=false;
        // throw new Error('Failed to send email: ',+error.message);
        emailSent = false
    }
    return emailSent
}







// SMTP_SERVICE=gmail
// SMTP_USER=eddaouymohamed1234@gmail.com
// SMTP_PASSWORD=uiwoxgprscxzglqj