import { createTransport } from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

//メール送信先を配列に格納
const BccList: string[] = [
  process.env.MAIL_RECEIVE1 as string,
  process.env.MAIL_RECEIVE2 as string,
  process.env.MAIL_RECEIVE3 as string,
  process.env.MAIL_RECEIVE4 as string,
];

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

    const ToMail: string = req.body.email;

  const mailData = {
    from: process.env.MAIL_SEND,
    to: ToMail,
    bcc: BccList,
    subject: "お問い合わせ【静岡大学 ITソルーション室】",
    text: `お問い合わせを受け付けました. 内容は以下のとおりです. 通常3日以内に担当者からご返答させていただきます. 

        お名前
        ${req.body.name}

        メールアドレス
        ${req.body.email}

        お問い合わせ内容
        ${req.body.free}

      `,
  };

  try {
    await transporter.sendMail(mailData);
    console.log(ToMail);
    res.status(200).end();
  } catch (error) {
    console.log("エラー発生");
    throw error;
  }
};
