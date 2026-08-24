import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstName, lastName, email, subject, message } = req.body;

  // Basic validation
  if (!firstName || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Create a Nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'murudharelectricals@gmail.com',
        pass: 'dufr qvej dfwj cpdk' // App Password
      }
    });

    // Email options
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`, // Note: Gmail usually rewrites the 'from' address to the authenticated user, so we put the sender info in the replyTo and body.
      replyTo: email,
      to: 'murudharelectricals@gmail.com', // Sending to yourself
      subject: `AMPSLITE Website Contact: ${subject || 'New Message'}`,
      text: `
You have received a new message from the AMPSLITE website contact form.

Name: ${firstName} ${lastName || ''}
Email: ${email}
Subject: ${subject || 'N/A'}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #c49b4b; border-bottom: 2px solid #c49b4b; padding-bottom: 10px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName || ''}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <br/>
          <h3 style="color: #333;">Message:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</div>
          <br/>
          <p style="font-size: 12px; color: #888;">This email was automatically generated from the AMPSLITE website.</p>
        </div>
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}
