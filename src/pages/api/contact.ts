/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import { NextApiRequest, NextApiResponse } from 'next';
import sendgridTransport from 'nodemailer-sendgrid-transport';
import nodemailer from 'nodemailer';

const email = process.env.MAILADDRESS;

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDRGRID_API_KEY
    }
  })
)
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { senderMail, name, content } = req.body;
    if (!senderMail.trim() || !name.trim() || !content.trim()) {
      return res.status(403).send('');
    }
    const message = {
      from: email,
      to: email,
      subject: `Nova mensagem de contato - ${name}`,
      html: `<p><b>Email:</b> ${senderMail}<br/><b>Message:</b>${content}</p>`,
      replyTo: senderMail
    };

    transporter.sendMail(message, (err, info) => {
      if (err) {
        // eslint-disable-next-line prettier/prettier
        console.log(err)
      } else {
        console.log('Message send', info);
      }
      return res.send('');
    });
  } catch (err) {
    return res.json({
      error: true,
      message: err.message
    });
  };
};
