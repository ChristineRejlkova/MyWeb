import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: 'API není nakonfigurováno. Přidejte RESEND_API_KEY.' },
      { status: 500 }
    )
  }

  const resend = new Resend(apiKey)

  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Vyplňte prosím všechna pole.' },
        { status: 400 }
      )
    }

    const toEmail = process.env.CONTACT_EMAIL ?? 'hello@christinerejlkova.com'
    const fromEmail = process.env.RESEND_FROM ?? 'onboarding@resend.dev'

    const { data, error } = await resend.emails.send({
      from: `Kontaktní formulář <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `[christinerejlkova.com] Zpráva od ${name}`,
      html: `
        <p><strong>Od:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Zpráva:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Send API error:', err)
    return NextResponse.json(
      { error: 'Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.' },
      { status: 500 }
    )
  }
}
