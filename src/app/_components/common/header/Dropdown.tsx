"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface DropdownProps {
  title: string;
  href: string;
  items: { title: string; href: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, href, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* الرابط الرئيسي */}
      <Link href={href}>
        <h1 className="text-orange font-almarai font-bold text-2xl cursor-pointer">
          {title}
        </h1>
      </Link>

      {/* القائمة المنسدلة مع Framer Motion */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 mt-0 bg-white shadow-lg p-3 w-fit"
        >
          {items.map((item) => (
            <li key={item.title} className="py-1 px-3 hover:bg-gray-200">
              <Link href={item.href}>
                <h2 className="text-gray-700 font-almarai text-lg">{item.title}</h2>
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default Dropdown;
