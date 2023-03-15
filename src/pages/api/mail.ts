import { createTransport } from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

//メール送信先を配列に格納
const ToList: string[] = [process.env.MAIL_RECEIVE1 as string];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_SEND,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailData = {
    from: process.env.MAIL_SEND,
    to: ToList,
    subject: "お問い合わせありがとうございます!",
    text: "お問い合わせを受け付けました",
  };

  try {
    await transporter.sendMail(mailData);
  } catch (error) {
    console.log("エラー発生")
    throw error;
  }
};
