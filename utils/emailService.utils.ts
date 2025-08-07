import nodemailer from "nodemailer";

import dotenv from "dotenv";
import { emailForgotPasswordOTP } from "./email_message";
import crypto from 'crypto';

dotenv.config();

export const generateOTP = (): string => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

export const sendEmail = async (
  to: string,
  subject: string,
  htmlContent: string
): Promise<void> => {
  const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
      user: process.env.NODE_MAILER_USER,
      pass: process.env.NODE_MAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Nasir" <nasir@gmail.com>`,
    to,
    subject,
    html: htmlContent,
  };

  await mailTransporter.sendMail(mailOptions);
};
console.log(sendEmail)

export const sendForgotPasswordOTP = async (email: string, otp: string): Promise<void> => {
  //console.log(1111111111111, email, otp)
  const htmlContent = emailForgotPasswordOTP(email, otp);
  
  await sendEmail(email, "OTP Code for Password Reset", htmlContent);
}

