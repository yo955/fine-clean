import { NextResponse } from "next/server";

const baseUrl = "https://www.amcoksa.com"; // استبدل بعنوان موقعك

export async function GET() {
  const staticPages: string[] = [
    "/",
    "/about",
    "/services",
    "/contact",
  ];

  const dynamicPages: string[] = []; // روابط ديناميكية

  // إضافة الفيديوهات إلى خريطة الموقع
  const videoPages: { loc: string; videoUrl: string; thumbnail: string; title: string; description: string }[] = [
    {
      loc: "/videos/main-video",
      videoUrl: "/videos/main-video.mp4",
      thumbnail: "/images/main-video-thumbnail.jpg",
      title: "الفيديو الرئيسي",
      description: "وصف الفيديو الرئيسي"
    },
    {
      loc: "/videos/video-1",
      videoUrl: "/videos/video-1.mp4",
      thumbnail: "/images/video-1-thumbnail.jpg",
      title: "عنوان الفيديو 1",
      description: "وصف الفيديو 1"
    },
    {
      loc: "/videos/video-2",
      videoUrl: "/videos/video-2.mp4",
      thumbnail: "/images/video-2-thumbnail.jpg",
      title: "عنوان الفيديو 2",
      description: "وصف الفيديو 2"
    },
    {
      loc: "/videos/video-3",
      videoUrl: "/videos/video-3.mp4",
      thumbnail: "/images/video-3-thumbnail.jpg",
      title: "عنوان الفيديو 3",
      description: "وصف الفيديو 3"
    },
    {
      loc: "/videos/video-4",
      videoUrl: "/videos/video-4.mp4",
      thumbnail: "/images/video-4-thumbnail.jpg",
      title: "عنوان الفيديو 4",
      description: "وصف الفيديو 4"
    },
  ];

  const allPages: string[] = [...staticPages, ...dynamicPages];

  // تضمين الفيديوهات في الخريطة
  const sitemap: string = `<?xml version="1.0" encoding="UTF-8" ?>
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

  ${videoPages
    .map((video) => {
      return `
    <url>
      <loc>${baseUrl}${video.loc}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
      <video:video>
        <video:content_loc>${baseUrl}${video.videoUrl}</video:content_loc>
        <video:thumbnail_loc>${baseUrl}${video.thumbnail}</video:thumbnail_loc>
        <video:title>${video.title}</video:title>
        <video:description>${video.description}</video:description>
        <video:publication_date>${new Date().toISOString()}</video:publication_date>
      </video:video>
    </url>
  `;
    })
    .join("")}
</urlset>`;

  return new NextResponse(sitemap.trim(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
