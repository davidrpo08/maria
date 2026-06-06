import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, phone, interests, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "Betancur Global Advisory <formulario@betancurglobaladvisory.com>",
    to: "ceo@betancurglobaladvisory.com",
    replyTo: email,
    subject: `Nuevo mensaje de ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;color:#0f1e3a">
        <h2 style="color:#C4983A;margin-bottom:4px">Nuevo contacto</h2>
        <p style="color:#999;font-size:13px;margin-top:0">Betancur Global Advisory — formulario web</p>
        <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
        <table style="width:100%;font-size:14px;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#999;width:140px">Nombre</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#999">Correo</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#C4983A">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 0;color:#999">Teléfono</td><td style="padding:8px 0">${phone}</td></tr>` : ""}
          ${interests?.length ? `<tr><td style="padding:8px 0;color:#999">Intereses</td><td style="padding:8px 0">${interests.join(", ")}</td></tr>` : ""}
        </table>
        <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
        <p style="font-size:14px;color:#555;line-height:1.7">${message.replace(/\n/g, "<br/>")}</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
