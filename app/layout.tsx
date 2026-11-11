import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Lanzakit · Tests pytest generados por IA";
const description =
  "MCP server open source que genera y valida tests pytest con Claude. Para devs hispanohablantes.";

export const metadata: Metadata = {
  // TODO: cambiar al dominio final cuando esté en Vercel
  metadataBase: new URL("https://lanzakit.dev"),
  title,
  description,
  keywords: ["pytest", "MCP", "Claude", "Python", "testing", "IA", "open source"],
  openGraph: {
    type: "website",
    locale: "es_419",
    url: "/",
    siteName: "Lanzakit",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

// themeColor lives in `viewport` since Next 14 (deprecated in `metadata`)
export const viewport: Viewport = {
  themeColor: "#0F0F13",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        {children}
        <Script id="mailerlite-universal" strategy="afterInteractive">
          {`(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
.push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
ml('account', '2788873');`}
        </Script>
      </body>
    </html>
  );
}
