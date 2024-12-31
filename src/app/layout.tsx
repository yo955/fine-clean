import "./globals.css";
import { Inter } from "next/font/google";
import { Footer, Header } from "./_components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "شركة امكو النموذجية - تنظيف منازل نظافة فلل غسيل شقق نقل اثاث عفش عزل خزانات بالرياض 0501144066",
  description:
    "شركة تنظيف منازل منزل بالرياض نظافة فلل فيلا شقق شقه واجهة مبنى واجهات مباني عماره عمائر مكتب مكاتب معرض معارض مطعم مطبخ غسيل مجلس مجالس كنب سجاد موكيت عزل خزان خزانات نقل اثاث الاثاث عفش العفش صيانة مكيف مكيفات رش مبيد مبيدات تعقيم مكافحة حشرات بالرياض الرياض",
  keywords:
    "تنظيف الفلل, تنظيف المنازل, خدمات تنظيف, تنظيف واجهات, تنظيف خزانات",
  author: "شـركـة آمـكـو النموذجية",
  openGraph: {
    title:
      "شركة امكو النموذجية - تنظيف منازل نظافة فلل غسيل شقق نقل اثاث عفش عزل خزانات بالرياض 0501144066",
    description:
      "شركة تنظيف منازل منزل بالرياض نظافة فلل فيلا شقق شقه واجهة مبنى واجهات مباني عماره عمائر مكتب مكاتب معرض معارض مطعم مطبخ غسيل مجلس مجالس كنب سجاد موكيت عزل خزان خزانات نقل اثاث الاثاث عفش العفش صيانة مكيف مكيفات رش مبيد مبيدات تعقيم مكافحة حشرات بالرياض الرياض",
    url: "https://www.amcoksa.com",
    siteName: "شـركـة آمـكـو النموذجية",
    images: [
      {
        url: "/logo/logo.png",
        width: 800,
        height: 600,
        alt: "شـركـة آمـكـو النموذجية",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@amcoksa",
    creator: "@amkoksa",
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
              "name": " شركة آمـكـو النموذجية",
              "url": "https://www.amcoksa.com",
              "logo": "https://www.amcoksa.com/logo/logo.png"
              "sameAs": [
                "https://www.facebook.com/amcoksa",
                "https://x.com/asad_companySA",
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "0501144066",
                "contactType": "Customer Service",
                "areaServed": "SA",
                "availableLanguage": "Arabic"
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
