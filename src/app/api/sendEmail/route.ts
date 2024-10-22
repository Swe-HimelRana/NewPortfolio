// app/api/sendEmail/route.ts
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { deobfuscateUsername, deobfuscatePassword } from '../../../lib/utils';


export async function POST(req: Request) {
  const { text } = await req.json();
  const to = "contact@himelrana.com";
  const subject = "Portfolio Contact Request";


  // Retrieve the obfuscated credentials
  const obfuscatedUsername = process.env.SMTP_USER ?? '';
  const obfuscatedPassword = process.env.SMTP_PASS ?? '';

  if (!obfuscatedUsername || !obfuscatedPassword) {
    throw new Error('SMTP_USER and SMTP_PASS must be set in the environment variables.');
  }

  // De-obfuscate the credentials
  const username = deobfuscateUsername(obfuscatedUsername);
  const password = deobfuscatePassword(obfuscatedPassword);

  // Create a transporter object using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    // Send mail with both text and html content
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_SENDER}>`,
      to,
      subject,
      text, // Plain text body (optional, but good for clients that don't support HTML)
      html: text, // Use the HTML content here
    });

    return NextResponse.json({ message: 'Email sent successfully!', status: "success" });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email.', status: "failed" }, { status: 500 });
  }
}
