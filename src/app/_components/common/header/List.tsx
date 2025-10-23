"use client";
import React from "react";
import Link from "next/link";
import MobileList from "./hero/MobileList";

interface ListItemType {
  title: string;
  href?: string;
}

const ListItem: ListItemType[] = [
  { title: "الرئيسية", href: "/" },
  { title: "من نحن", href: "/about" },
  { title: "رسالتنا", href: "/messages" },
  {
    title: "خدماتنا",
    href: "/services",
  },
  { title: "اتصل بنا", href: "/contact" },
];

export const List: React.FC = () => {
  return (
    <>
      <MobileList ListItem={ListItem} />

      {/* القائمة الرئيسية في الشاشات الأكبر */}
      <nav>
        <ul className="hidden md:flex bg-gray mb-1 justify-center items-center gap-10 p-8 " >
          {ListItem.map((item) =>
          (
            <li key={item.title}>
              <Link href={item.href || "/"}>
                <h1 className="text-menu_color md:text-orange md:hover:text-orange font-almarai font-bold text-2xl">
                  {item.title}
                </h1>
              </Link>
            </li>
          )
          )}
        </ul>
      </nav>
    </>
  );
};
