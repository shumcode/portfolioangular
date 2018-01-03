const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// static folder
app.use(express.static(__dirname + "/public"));

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.post('/send', (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail', // true for 465, false for other ports
  auth: {
      user: 'enteremailhere@gmail.com', // generated ethereal user
      pass: 'password'  // generated ethereal password
  },
  tls: {
    rejectUnauthorized:false
  }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Nodemailer Contact" <enteremailhere@gmail.com>', // sender address
    to: 'cshumylo@gmail.com', // list of receivers
    subject: 'Node Contact Request', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

});
});

// app.get('/', (req, res) => {
//   res.render('contact');
// });

app.listen(3000, () => console.log('Server started...'));