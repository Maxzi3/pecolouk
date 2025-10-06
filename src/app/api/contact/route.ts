import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, phone } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    // Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `📩 New Message from ${name}`,
      html: `
  <div style="margin:0; padding:0; background-color:#f7f9fc; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
      <tr>
        <td style="background-color:#8B5A2B; padding:20px; text-align:center; color:#ffffff;">
          <h2 style="margin:0; font-size:22px;">📬 New Contact Message</h2>
        </td>
      </tr>
      <tr>
        <td style="padding:25px;">
          <p style="font-size:16px; color:#333; line-height:1.5;">
            You’ve received a new contact form submission from pecolouk.com.
          </p>

          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
            <tr>
              <td style="padding:10px 0; font-weight:bold; color:#555;">👤 Name:</td>
              <td style="padding:10px 0; color:#111;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0; font-weight:bold; color:#555;">📧 Email:</td>
              <td style="padding:10px 0; color:#111;">${email}</td>
            </tr>
            ${
              phone
                ? `<tr>
                    <td style="padding:10px 0; font-weight:bold; color:#555;">📞 Phone:</td>
                    <td style="padding:10px 0; color:#111;">${phone}</td>
                  </tr>`
                : ""
            }
            <tr>
              <td style="padding:10px 0; font-weight:bold; color:#555; vertical-align:top;">💬 Message:</td>
              <td style="padding:10px 0; color:#111; line-height:1.5;">${message}</td>
            </tr>
          </table>

          <div style="margin-top:30px; text-align:center;">
            <a href="mailto:${email}" 
              style="display:inline-block; background-color:#2563eb; color:#ffffff; padding:12px 20px; text-decoration:none; border-radius:6px; font-weight:bold; font-size:15px;">
              Reply to ${name}
            </a>
          </div>
        </td>
      </tr>
      <tr>
        <td style="background-color:#f1f5f9; text-align:center; padding:15px; color:#777; font-size:13px;">
          © ${new Date().getFullYear()} PE'COLO UK LIMITED
        </td>
      </tr>
    </table>
  `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
