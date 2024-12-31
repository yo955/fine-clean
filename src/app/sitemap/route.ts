import { NextResponse } from "next/server";

const baseUrl = "https://www.amcoksa.com"; // استبدل بعنوان موقعك

export async function GET() {
  // الصفحات الثابتة
  const staticPages: string[] = [
    "/",
    "/about",
    "/services",
    "/contact",
  ];

  // الصفحات الديناميكية (إذا كنت تستخدم قاعدة بيانات أو API)
  const dynamicPages: string[] = []; // أضف الروابط الديناميكية هنا

  // جميع الروابط
  const allPages: string[] = [...staticPages, ...dynamicPages];

  // إنشاء XML للـ Sitemap
  const sitemap: string = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
        .map((page) => {
          return `
            <url>
              <loc>${baseUrl}${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.8</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
