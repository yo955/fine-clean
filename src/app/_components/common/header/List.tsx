"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="md:hidden mx-2 bg-gray">
        <button onClick={toggleMenu} className="text-3xl text-orange">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* القائمة في الموبايل */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="top-0 left-0 w-full bg-white p-5 shadow-lg md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="space-y-4">
              {ListItem.map((item) =>
                item.dropdown ? (
                  <li key={item.title}>
                    <Dropdown
                      title={item.title}
                      href={item.href!}
                      items={item.dropdown}
                    />
                  </li>
                ) : (
                  <li key={item.title}>
                    <Link href={item.href || "#"}>
                      <h1 className=" text-orange font-almarai font-bold text-2xl">
                        {item.title}
                      </h1>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* القائمة الرئيسية في الشاشات الأكبر */}
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
                <h1 className="text-orange font-almarai font-bold text-2xl">
                  {item.title}
                </h1>
              </Link>
            </li>
          )
        )}
      </ul>
    </>
  );
};
