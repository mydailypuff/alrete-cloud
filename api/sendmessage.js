const nodemailer = require('nodemailer');
const cors = require('cors');

// Define CORS options
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from React app's origin
  methods: ['POST', 'GET'],        // Allow necessary methods
  allowedHeaders: ['Content-Type'], // Allow necessary headers
};

// Export your serverless function
module.exports = async (req, res) => {
  // Apply CORS to the incoming request
  cors(corsOptions)(req, res, async () => {
    if (req.method === 'POST') {
      const { first_name, last_name, email, phone_number, message } = req.body;

      // Log the form data to verify
      console.log('Form Data:', req.body);

      // Create a transporter using Gmail SMTP
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'alretecloud@gmail.com',
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      // Define mail options
      const mailOptions = {
        from: email || 'no-reply@example.com',
        to: ['avanish@alrete.cloud','sanjana.hk@alrete.cloud'],
        subject: `New Message from ${first_name} ${last_name}`,
        text: `You have received a new message: \n\nName: ${first_name} ${last_name}\nEmail: ${email}\nPhone: ${phone_number}\nMessage: ${message}`,
      };

      // Send the email
      try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
      } catch (error) {
        res.status(500).json({ message: 'Failed to send email', error });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  });
};
