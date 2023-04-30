const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  // create reusable transporter object using the default SMTP transport
  // let transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'priyanshukumar10081021@gmail.com',
  //     pass: '',
  //   },
  // });

  // // send mail with defined transport object
  // let mailOptions = {
  //   from: 'priyanshukumar10081021@gmail.com',
  //   to: '',
  //   subject: `New message from ${name} - ${subject}`,
  //   text: `${name} (${email}) says: ${message}`,
  // };

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.log(error);
  //     res.status(500).send({ message: 'Error sending email.' });
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //     res.status(200).send({ message: 'Form submitted successfully!' });
  //   }
  // });
  res.status(200).send({ message: 'Form submitted successfully!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
