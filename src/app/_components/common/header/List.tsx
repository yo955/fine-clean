import Link from "next/link";
import React from "react";
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
      { title: "المجالات الخدمية", href: "/services/service1" },
      { title: "المجالات الانشائية", href: "/services/service2" },
    ],
  },
  { title: "اتصل بنا", href: "/contact" },
];

export const List: React.FC = () => {
  return (
    <ul className="bg-gray flex p-5 justify-center items-center gap-10">
      {ListItem.map((item) =>
        item.dropdown ? (
          <li key={item.title} className="relative group">
            <Dropdown title={item.title} href={item.href!} items={item.dropdown} />
          </li>
        ) : (
          <li key={item.title}>
            <Link href={item.href || "#"}>
              <h1 className="text-orange font-almarai font-bold text-2xl">
                {item.title}
              </h1>
            </Link>
          </li>
        )
      )}
    </ul>
  );
};
