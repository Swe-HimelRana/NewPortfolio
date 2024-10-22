import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { to, subject, text } = req.body;

    // Create a transporter object using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Your SMTP server from .env.local
      port: Number(process.env.SMTP_PORT), // Your SMTP port from .env.local
      secure: process.env.SMTP_SECURE === 'true', // Use true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your SMTP username
        pass: process.env.SMTP_PASS, // Your SMTP password
      },
    });

    try {
      // Send mail
      await transporter.sendMail({
        from: `"Your Name" <${process.env.SMTP_USER}>`, // Sender address
        to, // List of recipients
        subject, // Subject line
        text, // Plain text body
      });

      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;