"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingIcons: React.FC = () => {
  const [showPhoneIcon, setShowPhoneIcon] = useState<boolean>(false);
  const [hideIcons, setHideIcons] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setShowPhoneIcon(window.scrollY > 100);
      setHideIcons(scrollPosition >= documentHeight - 100); // إخفاء الأيقونات قبل نهاية الصفحة بـ100 بكسل
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!hideIcons && (
        <div
          className={`container z-50 bg-primary fixed bottom-0 left-0 h-[70px] align-middle flex justify-between items-center shadow-lg shadow-gray ${
            showPhoneIcon
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          {/* أيقونة الواتساب */}
          <div className="fixed right-5 bg-green-500 text-white w-fit h-12 rounded-md p-2 flex items-center justify-center shadow-lg cursor-pointer z-50">
            <Link
              href="https://wa.me/0501144066"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex gap-2 items-center"
            >
              <span>0501144066</span> <FaWhatsapp className="text-3xl" />
            </Link>
          </div>
          {/* GMAIL */}
          <div
            className="gmail fixed bg-primary shadow-sm shadow-gray text-white w-fit h-12 rounded-md p-2 flex items-center justify-center gap-2 cursor-pointer transition-opacity duration-300 transform z-50"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Link
              href="mailto:AMCO112025@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-xl cursor-pointer p-1 rounded-lg">
                AMCO112025@gmail.com
              </p>
            </Link>
          </div>

          {/* أيقونة الهاتف */}
          <div
            className={`fixed left-5 bg-primary shadow-sm shadow-gray text-white w-fit h-12 rounded-md p-2 flex items-center justify-center gap-2 cursor-pointer transition-opacity duration-300 transform z-50`}
          >
            <span>0501144066</span> <FaPhoneAlt className="text-2xl" />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingIcons;
