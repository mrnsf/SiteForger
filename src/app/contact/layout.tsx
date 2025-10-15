import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Site Forger",
  description: "Get in touch with Site Forger for your blue-collar business website needs. Request a quote and start building your online presence today.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}