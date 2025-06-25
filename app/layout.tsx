import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import Chatbot from "./components/chatbot";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Alexander Dunchev Personal Website",
    template: "%s | Alexander Dunchev Personal Website",
  },
  description: "This is my personal website.",
  openGraph: {
    title: "Alexander Dunchev Personal Website",
    description: "This is my personal website.",
    url: baseUrl,
    siteName: "Alexander Dunchev Personal Website",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <head>
        <script
          type="module"
          src="https://gradio.s3-us-west-2.amazonaws.com/5.0.1/gradio.js"
        ></script>
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="flex-auto mt-6 flex flex-col">{children}</main>
        <Footer />
        <Chatbot />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
