// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    const { name, email, message } = req.body;

    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAIL_USER, // Your email
            pass: process.env.GMAIL_PASS, // Your email password
        },
    });

    // Email options
    const mailOptions = {
        from: email,
        to: process.env.GMAIL_USER, // Your email (where you'll receive the emails)
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to send message' });
    }
}
