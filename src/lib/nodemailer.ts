import nodemailer from 'nodemailer';

const email = process.env.REACT_APP_GMAIL_ADDRESS;
const pass = process.env.REACT_APP_GMAIL_PASS;

export type MailType = {
  subject: string;
  sender: string;
  text: string;
};
export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: 'jiumaker@naver.com',
};
