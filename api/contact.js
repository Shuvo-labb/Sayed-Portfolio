import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required' })
  }

  try {
    // Sanitize inputs to prevent XSS
    const sanitize = (str) => str.replace(/[<>]/g, (c) => c === '<' ? '&lt;' : '&gt;')
    const safeName = sanitize(name)
    const safeEmail = sanitize(email)
    const safeSubject = sanitize(subject)
    const safeMessage = sanitize(message)

    // Send notification email to you
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'TP083213@mail.apu.edu.my',
      replyTo: safeEmail,
      subject: `Portfolio Contact: ${safeSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
            New Contact Form Message
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p><strong>Subject:</strong> ${safeSubject}</p>
          </div>
          <div style="padding: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
          </div>
          <hr style="border: 1px solid #eee;">
          <p style="color: #999; font-size: 12px;">Sent from your portfolio contact form</p>
        </div>
      `
    })

    return res.status(200).json({ success: true, message: 'Email sent successfully!' })

  } catch (error) {
    console.error('Resend error:', error)
    return res.status(500).json({ 
      success: false, 
      error: 'Failed to send email. Please try again later.' 
    })
  }
}
