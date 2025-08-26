import "./globals.css";
import { Inter } from "next/font/google";
import { Footer, Header } from "./_components";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title:
    "+966 55 518 2882 -شركة فاين كلين - تنظيف منازل فلل شقق نقل اثاث عفش عزل ",
  description:
    "شركة فاين كلين افضل شركة تنظيف منازل و نقل اثاث و عفش بمكة المكرمة مع ضمان الفك والتركيب كما انها تعد من ارخص شركات النظافة و النقل المنزلي المكتبي او العفش وفي مجال خدمات تاثيث العقارات او العقار او المباني العقاريه سواء مبنى عقاري او مجموعة عقارات او منزل سكني او عقار تجاري او حكومي. بواسطة فريق عمل متخصص محترف في تقديم خدمات نظافة ونقل الأثاث وصيانة المكيفات وعزل الخزانات ورش المبيدات بأحدث المواد والمعدات.",
  keywords:
    "تنظيف الفلل, تنظيف المنازل, خدمات تنظيف, تنظيف واجهات, تنظيف خزانات, تنظيف شقق, تنظيف كنب, تنظيف سجاد, تنظيف موكيت, تنظيف مطابخ, نقل أثاث بمكة المكرمة, نقل عفش بمكة المكرمة, مكافحة حشرات, رش مبيدات, عزل خزانات, غسيل كنب, صيانة مكيفات, تنظيف واجهات مباني, صيانة منزلية, خدمات تنظيف بمكة المكرمة",
  author: "شـركـة فايـن كليـن",
  icons:{
     icon: "/images/logo.png",
  },
  openGraph: {
    title:
      "شركة فاين كلين - تنظيف منازل نظافة فلل غسيل شقق نقل اثاث عفش - عزل خزان ‏‎+966 55 518 2882",
    description:
      "شركة تنظيف منازل بمكة المكرمة تقدم خدمات تنظيف فلل وشقق ونقل أثاث وعفش وعزل خزانات وصيانة مكيفات ورش مبيدات بأعلى جودة.",
    url: "https://www.fineclean.sa",
    siteName: "شـركـة فايـن كليـن",
    images: [
      {
        url: "https://www.fineclean.sa/logo/logo.png",
        width: 800,
        height: 600,
        alt: "شـركـة فايـن كليـن",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@fincelan.sa",
    creator: "@fincelan.sa",
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
        {/* Google site verification */}

        {/* Performance optimizations */}
        <link rel="preconnect" href="https://www.fineclean.sa" />
        <link rel="dns-prefetch" href="https://www.fineclean.sa" />

        {/* Preload critical images */}
        <link
          rel="preload"
          as="image"
          href="/logo/logo.png"
          type="image/png"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/saudi-man.webp"
          type="image/jpeg"
          fetchPriority="high"
        />

        {/* Open Graph image */}
        <meta
          property="og:image"
          content="https://www.fineclean.sa/images/saudi-man.webp"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Schema markup with logo for rich results */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "شركة فاين كلين",
              "url": "https://www.fineclean.sa",
              "logo": "https://www.fineclean.sa/logo/logo.png",
              "image": "https://www.fineclean.sa/logo/logo.png",
              "sameAs": [
                "https://x.com/FineClean2025"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966555182882",
                "contactType": "Customer Service",
                "areaServed": "SA",
                "availableLanguage": "Arabic"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Makkah, Saudi Arabia",
                "addressCountry": "SA"
              }
            }
          `}
        </script>
      </head>
      <body className={inter.className}>
        <Header />
        <main className="font-almarai">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
