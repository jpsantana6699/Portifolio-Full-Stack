import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: 'Requisição inválida.' }, { status: 400 });
  }

  const name = String(data.name ?? '').trim();
  const email = String(data.email ?? '').trim();
  const projectType = String(data.projectType ?? '').trim();
  const message = String(data.message ?? '').trim();

  // Validação
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Preencha nome, email e mensagem.' }, { status: 400 });
  }
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Email inválido.' }, { status: 400 });
  }
  if (message.length > 5000 || name.length > 200) {
    return NextResponse.json({ error: 'Conteúdo muito longo.' }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;

  // Sem credenciais configuradas: avisa o front para cair no fallback do WhatsApp.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      { error: 'Envio por email não configurado.', code: 'NOT_CONFIGURED' },
      { status: 503 },
    );
  }

  const port = Number(SMTP_PORT) || 465;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const to = CONTACT_TO || SMTP_USER;
  const safe = (v: string) => v.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  try {
    await transporter.sendMail({
      from: `"Portfólio — Contato" <${SMTP_USER}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `Novo contato do portfólio — ${projectType || 'Projeto'}`,
      text: `Nome: ${name}\nEmail: ${email}\nTipo de projeto: ${projectType || '—'}\n\nMensagem:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: linear-gradient(135deg, #00d4ff, #0096cc); padding: 20px 24px; border-radius: 12px 12px 0 0;">
            <h2 style="margin: 0; color: #fff;">Novo contato do portfólio</h2>
          </div>
          <div style="border: 1px solid #eee; border-top: none; padding: 24px; border-radius: 0 0 12px 12px;">
            <p style="margin: 0 0 8px;"><strong>Nome:</strong> ${safe(name)}</p>
            <p style="margin: 0 0 8px;"><strong>Email:</strong> ${safe(email)}</p>
            <p style="margin: 0 0 16px;"><strong>Tipo de projeto:</strong> ${safe(projectType) || '—'}</p>
            <p style="margin: 0 0 6px;"><strong>Mensagem:</strong></p>
            <p style="white-space: pre-wrap; background: #f6f8fa; padding: 14px; border-radius: 8px; margin: 0;">${safe(message)}</p>
          </div>
        </div>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] sendMail error:', err);
    return NextResponse.json({ error: 'Não foi possível enviar agora.' }, { status: 500 });
  }
}
