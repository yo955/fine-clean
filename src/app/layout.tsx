import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "شركة أسادكو المتحدة - خدمات تنظيف الفلل والمنازل",
  description:
    "شركة أسادكو تقدم خدمات تنظيف الفلل والمنازل بأعلى معايير الجودة باستخدام أحدث التقنيات.",
  keywords:
    "تنظيف الفلل, تنظيف المنازل, خدمات تنظيف, تنظيف واجهات, تنظيف خزانات",
  author: "شركة أسادكو المتحدة",
  openGraph: {
    title: "شركة أسادكو المتحدة - خدمات تنظيف الفلل والمنازل",
    description:
      "شركة أسادكو تقدم خدمات تنظيف الفلل والمنازل بأعلى معايير الجودة.",
    url: "https://www.asadco.com",
    siteName: "شركة أسادكو المتحدة",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "شركة أسادكو المتحدة",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@asadco",
    creator: "@asadco",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "شركة أسادكو المتحدة",
              "url": "https://www.asadco.com",
              "logo": "https://www.asadco.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/asadco",
                "https://twitter.com/asadco"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1234567890",
                "contactType": "Customer Service",
                "areaServed": "SA",
                "availableLanguage": "Arabic"
              }
            }
          `}
        </script>
      </head>
      <body className={inter.className}>
        <main className="font-almarai">{children}</main>
      </body>
    </html>
  );
}
