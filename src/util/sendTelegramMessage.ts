export async function sendTelegramMessage({
  name,
  phone,
  message,
  formTitle = "Главная форма",
}: {
  name: string
  phone: string
  message: string
  formTitle?: string
}) {
  const TOKEN = process.env.REACT_APP_TOKEN
  const CHAT_ID = process.env.REACT_APP_CHATT_ID
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

  // Build Telegram message
  let text = `<b>${formTitle}</b>\n`
  text += `<b>Имя:</b> ${name}\n`
  text += `<b>Телефон:</b> ${phone}\n`
  text += `<b>Сообщение:</b> ${message}\n`

  try {
    const res = await fetch(URI_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        parse_mode: "html",
        text,
      }),
    })

    const data = await res.json()
    if (!res.ok) throw new Error(data.description || "Failed to send message")

    return { success: true, data }
  } catch (err) {
    console.error("Telegram message error:", err)
    return { success: false, error: err }
  }
}
