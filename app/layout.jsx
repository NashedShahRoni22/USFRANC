import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Head from "next/head";

export const metadata = {
  title: "USFRANC | Capital-Backed Utility Cryptocurrency for Secure Transactions",
  description:
    "Discover USFRANC, a decentralized cryptocurrency backed by capital reserves, offering secure and versatile solutions for crypto users.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H26S1JXRV1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-H26S1JXRV1');
            `,
          }}
        />
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="woQ8K3Ftvm7MtBebbUSnl6MwK-S35NbVFy4ENpREYK0"
        />
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
