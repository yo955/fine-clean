"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Dropdown from "../Dropdown";

interface MobileListProps {
  ListItem: {
    title: string;
    href?: string;
    dropdown?: { title: string; href: string }[];
  }[];
}

const MobileList: React.FC<MobileListProps> = ({ ListItem }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLinkClick = (href: string) => {
    if (href) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <div className="md:hidden mx-2 p-2 bg-gray">
        <button
          onClick={toggleMenu}
          className="text-3xl text-menu_color hover:text-orange"
        >
          {menuOpen ? <FaTimes className="text-5xl" /> : <FaBars className="text-5xl" />}
        </button>
      </div>

      {/* القائمة في الموبايل */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="top-0 left-0 w-full bg-white p-5 shadow-lg z-50 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <nav>
              <ul className="space-y-4">
                {ListItem.map((item) =>
                  item.dropdown ? (
                    <li key={item.title} className={``}>
                      <Dropdown
                        href={item.href!}
                        title={item.title}
                        items={item.dropdown}
                        setMenuOpen={setMenuOpen}
                      />
                    </li>
                  ) : (
                    <li
                      key={item.title}
                      onClick={() => handleLinkClick(item.href!)}
                    >
                      <Link href={item.href || "#"}>
                        <h1 className="text-menu_color p-2 hover:bg-black_gray hover:text-white font-almarai font-bold text-lg">
                          {item.title}
                        </h1>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileList;
