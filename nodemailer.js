require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  // host: 'smtp.gmail.com',
  host: 'smtp.ethereal.email',
  secure: false,
  //port: 465 SECURE
  port: 587,
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PWD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <alphonso.west@ethereal.email>', // sender address
    to: 'alphonso.west@ethereal.email', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

sendMail();
