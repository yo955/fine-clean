"use client";
import React from "react";
import Link from "next/link";
import MobileList from "./hero/MobileList";
import Dropdown from "./Dropdown";

interface ListItemType {
  title: string;
  href?: string;
  dropdown?: { title: string; href: string }[];
}

const ListItem: ListItemType[] = [
  { title: "الرئيسية", href: "/" },
  { title: "من نحن", href: "/about" },
  { title: "مقالات", href: "/articles" },
  {
    title: "خدماتنا",
    href: "/services",
    dropdown: [
      { title: "المجالات الخدمية", href: "/services/construction" },
      { title: "المجالات الانشائية", href: "/services/service" },
    ],
  },
  { title: "اتصل بنا", href: "/contact" },
];

export const List: React.FC = () => {
  return (
    <>
      <MobileList ListItem={ListItem} />

      {/* القائمة الرئيسية في الشاشات الأكبر */}
      <nav>
        <ul className="hidden md:flex bg-gray p-5 justify-center items-center gap-10">
          {ListItem.map((item) =>
            item.dropdown ? (
              <li key={item.title} className="relative group">
                <Dropdown
                  title={item.title}
                  href={item.href!}
                  items={item.dropdown}
                />
              </li>
            ) : (
              <li key={item.title}>
                <Link href={item.href || "#"}>
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
