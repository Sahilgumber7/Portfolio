import { Resend } from "resend";
import { redirect } from "next/navigation";

// Initialize Resend with API key from .env
const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");

  if (!message || !name || !SenderEmail) {
    return { error: "Please fill all required fields" };
  }

  // Choose recipient based on environment
  const toEmail =
    process.env.NODE_ENV === "development"
      ? "sahilgumber13418@gmail.com" // only your verified email in dev/test mode
      : "mdtaqui.jhar@gmail.com";    // real recipient in production

  // Use your verified email as "from"
  const fromEmail = "Contact Form <sahilgumber13418@gmail.com>";

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `${name} From Contact Form`,
      reply_to: `${SenderEmail}`,
      text: `Sender email: ${SenderEmail}\n\nMessage:\n${message}`,
    });

    // Redirect after successful send
    return redirect("/");
  } catch (error: any) {
    console.error("Email sending failed:", error);
    return { error: "Failed to send email. Please try again later." };
  }
};
