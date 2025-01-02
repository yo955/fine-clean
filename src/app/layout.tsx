import "./globals.css";
import { Inter } from "next/font/google";
import { Footer, Header } from "./_components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "0501144066 -شركة امكو - تنظيف منازل فلل شقق نقل اثاث عفش عزل ",
  description:
    "شركة تنظيف منازل منزل بالرياض نظافة فلل فيلا شقق شقه واجهة مبنى واجهات مباني عماره عمائر مكتب مكاتب معرض معارض مطعم مطبخ غسيل مجلس مجالس كنب سجاد موكيت عزل خزان خزانات نقل اثاث الاثاث عفش العفش صيانة مكيف مكيفات رش مبيد مبيدات تعقيم مكافحة حشرات بالرياض الرياض",
  keywords:
    "تنظيف الفلل, تنظيف المنازل, خدمات تنظيف, تنظيف واجهات, تنظيف خزانات, تنظيف شقق, تنظيف كنب, تنظيف سجاد, تنظيف موكيت, تنظيف مطابخ, نقل أثاث بالرياض, نقل عفش بالرياض, مكافحة حشرات, رش مبيدات, عزل خزانات, غسيل كنب, صيانة مكيفات, تنظيف واجهات مباني, صيانة منزلية, خدمات تنظيف بالرياض,تنظيف المنازل في السعودية,شركة تنظيف بالرياض السعودية,تنظيف فلل السعودية,تنظيف شقق في السعودية,نقل أثاث في السعودية,مكافحة حشرات السعودية,عزل خزانات في السعودية,نقل عفش السعودية",
  author: "شـركـة آمـكـو النموذجية",
  openGraph: {
    title:
      "شركة امكو - تنظيف منازل نظافة فلل غسيل شقق نقل اثاث عفش - عزل خزان 0501144066",
    description:
      "شركة تنظيف منازل منزل بالرياض نظافة فلل فيلا شقق شقه واجهة مبنى واجهات مباني عماره عمائر مكتب مكاتب معرض معارض مطعم مطبخ غسيل مجلس مجالس كنب سجاد موكيت عزل خزان خزانات نقل اثاث الاثاث عفش العفش صيانة مكيف مكيفات رش مبيد مبيدات تعقيم مكافحة حشرات بالرياض الرياض",
    url: "https://www.amcoksa.com",
    siteName: "شـركـة آمـكـو النموذجية",
    images: [
      {
        logo: "https://www.amcoksa.com/logo/logo.png",
        width: 800,
        height: 600,
        alt: "شـركـة آمـكـو النموذجية",
      },
    ],
    videos: [
      {
        url: "https://www.amcoksa.com/videos/main-video.mp4",
        type: "video/mp4",
        width: 1280,
        height: 720,
        alt: "فيديو رئيسي من شركة آمكو النموذجية",
      },
      {
        url: "https://www.amcoksa.com/videos/video-1.mp4",
        type: "video/mp4",
        width: 1280,
        height: 720,
        alt: "فيديو 1 من شركة آمكو النموذجية",
      },
      {
        url: "https://www.amcoksa.com/videos/video-2.mp4",
        type: "video/mp4",
        width: 1280,
        height: 720,
        alt: "فيديو 2 من شركة آمكو النموذجية",
      },
      {
        url: "https://www.amcoksa.com/videos/video-3.mp4",
        type: "video/mp4",
        width: 1280,
        height: 720,
        alt: "فيديو 3 من شركة آمكو النموذجية",
      },
      {
        url: "https://www.amcoksa.com/videos/video-4.mp4",
        type: "video/mp4",
        width: 1280,
        height: 720,
        alt: "فيديو 4 من شركة آمكو النموذجية",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@amcoksa",
    creator: "@amkoksa",
    videos: [
      {
        url: "https://www.amcoksa.com/videos/main-video.mp4",
        type: "video/mp4",
        width: 1280,
        height: 720,
      },
    ],
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
        {/* إضافة meta tag هنا */}
        <meta
          name="google-site-verification"
          content="sba9tCIoW2AoAikPfDaIj6YWxzI8rmBD-Hpwroi3450"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "شركة آمـكـو النموذجية",
      "url": "https://www.amcoksa.com",
      "logo": "https://www.amcoksa.com/logo/logo.png",
   "sameAs": [
  "https://x.com/asad_companySA",
  "https://www.tiktok.com/@asadunitedco",
  "https://www.instagram.com/AsadUnitedCoSA/",
  "https://www.snapchat.com/add/sh-iz1?invite_id=55IfyKbg&locale=ar_SA%40calendar%3Dgregorian&share_id=mJQrd00dSoqbG33alWvAEA&sid=a124c58240ab4926ace691d736404c89",
  "https://www.youtube.com/@AsadUnitedCoSA"
  ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+966501144066",
        "contactType": "Customer Service",
        "areaServed": "SA",
        "availableLanguage": "Arabic"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Riyadh",
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
