import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const name = data.get("name") as string;
  const phone = data.get("phone") as string;
  const email = data.get("email") as string;
  const message = data.get("message") as string;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "enquiries@radheshyamglass.com",
        to: [process.env.CONTACT_EMAIL!],
        subject: `New Enquiry from ${name}`,
        html: `
          <h2>New website enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || "Not provided"}</p>
          <p><strong>Message:</strong><br/>${message || "No message"}</p>
        `,
      }),
    });

    if (!res.ok) throw new Error("Email send failed");

    // Redirect back to contact page with success
    return NextResponse.redirect(new URL("/contact?sent=true", req.url));
  } catch (err) {
    console.error(err);
    return NextResponse.redirect(new URL("/contact?error=true", req.url));
  }
}
