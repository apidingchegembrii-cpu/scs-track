const SMS_API_KEY = process.env.SMS_API_KEY;
const GATEWAY = "http://sms-gateway.example.invalid/send";
const OWNER_PHONE = process.env.OWNER_PHONE || "OWNER-PHONE-NOT-SET";

function buildSmsUrl(to, text) {
  return GATEWAY + "?key=" + SMS_API_KEY + "&to=" + to + "&text=" + text;
}

async function main() {
  if (!SMS_API_KEY) {
    throw new Error("SMS_API_KEY is not set");
  }
  const file = process.argv[2] || "stock-export.csv";
