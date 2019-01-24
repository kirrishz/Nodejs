var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 's.kirishanth97@gmail.com',
    pass: 'gigugigu0001'
  }
});

var mailOptions = {
  from: 's.kirishanth97@gmail.com',
  to: 'info@uki.life',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
