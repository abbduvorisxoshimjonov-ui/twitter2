export async function sendToTelegram(text) {
  const CHAT_ID = 5554170142;
  const BOT_TOKEN = "8896386459:AAGx6zGRVzzLC2Qxm0BHl86E1pYQO9dSEQw";

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
    }),
  });
}