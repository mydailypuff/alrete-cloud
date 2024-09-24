const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email sending endpoint
app.post('/send', (req, res) => {
  const { first_name, last_name, email, phone_number, message } = req.body;

  // Create a transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services as well
    auth: {
      user: 'alrete323@gmail.com', // Your email
      pass: process.env.EMAIL_PASSWORD // Use the password from Vercel environment variable
    }
  });

  // Email options
  let mailOptions = {
    from: email, // Sender's email
    to: 'avanish@alrete.cloud, sanjana.hk@alrete.cloud', // Recipients
    subject: `New Message from ${first_name} ${last_name}`,
    text: `
      You have received a new message from the contact form.\n\n
      Here are the details:\n
      Name: ${first_name} ${last_name}\n
      Email: ${email}\n
      Phone: ${phone_number}\n
      Message: ${message}
    `
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: 'Failed to send email' });
    } else {
      return res.status(200).send({ message: 'Email sent successfully!' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
