import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Neue Nachricht vom Kontaktformular</Preview>
      <Tailwind>
        <Body className="bg-gray-50 text-black">
          <Container>
            <Section className="bg-white borderBlack m-[8px] p-[20px] rounded-md">
              <Heading className="leading-tight">
                Du hast die folgende Nachricht von deinem Kontaktformular
                erhalten
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Die E-Mail-Absenderadresse ist: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
