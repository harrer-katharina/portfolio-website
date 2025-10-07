"use server";

import React from "react";
import nodemailer from "nodemailer";
import { validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import { render } from "@react-email/render";

export const sendEmail = async (formData: FormData) => {

  const senderName = formData.get("senderName") as string;
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  if (!senderName || !senderEmail || !message) {
    return { error: "Bitte fülle alle Felder aus." };
  }
  if (!validateString(senderEmail, 500)) {
    return { error: "Die E-Mail-Adresse ist ungültig." };
  }
  if (!validateString(message, 5000)) {
    return { error: "Die Nachricht ist zu lang." };
  }

  const emailHtml = await render(
    React.createElement(ContactFormEmail, {
      message,
      senderName,
      senderEmail,
    })
  );

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, 
    port: parseInt(process.env.EMAIL_PORT || "465", 10),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Kontaktformular" <hello@katharina-harrer.de>`, 
      to: "hello@katharina-harrer.de",
      replyTo: senderEmail,
      subject: "Neue Nachricht vom Kontaktformular",
      text: `Nachricht von: ${senderName}\n\n${message}`,
      html: emailHtml,
    });

    return { success: true, info };
  } catch (error) {
    return { 
      error: "Es gab ein Problem beim Senden der Nachricht. Bitte kontaktiere mich unter hello@katharina-harrer.de oder versuche es später erneut." 
    };
  }
};