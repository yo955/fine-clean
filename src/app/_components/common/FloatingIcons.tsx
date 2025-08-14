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
      setHideIcons(scrollPosition >= documentHeight - 100); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showPhoneIcon && !hideIcons && (
        <div
          className={`container z-50 bg-orange opacity-90 fixed bottom-0 left-0 h-[70px] align-middle flex justify-between items-center shadow-lg shadow-gray transition-all duration-300 ${
            showPhoneIcon
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          {/* أيقونة الواتساب */}
          <div className="fixed right-5 bg-green-500 text-white h-12 rounded-md p-2 flex items-center justify-center shadow-lg cursor-pointer z-50">
            <Link
              href="https://wa.me/966555182882"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex items-center"
              dir="ltr"
            >
              <span className="hidden md:inline-block md:mr-2">+966 55 518 2882</span> 
              <FaWhatsapp className="text-3xl" />
            </Link>
          </div>
          
          {/* GMAIL - Hidden on mobile, shown on desktop */}
          <div
            className="hidden gmail fixed bg-orange shadow-sm shadow-gray text-white h-12 rounded-md p-2 md:flex items-center justify-center cursor-pointer transition-opacity duration-300 transform z-50"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Link
              href="mailto:Fine.Clean@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-xl cursor-pointer p-1 rounded-lg">
                Fine.Clean@hotmail.com
              </p>
            </Link>
          </div>

          {/* أيقونة الهاتف */}
          <div
            className="fixed left-5 bg-orange shadow-sm shadow-gray text-white h-12 rounded-md p-2 flex items-center justify-center cursor-pointer z-50"
          >
            <Link
              href="tel:+966555182882"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex items-center"
              dir="ltr"
            >
              <span className="hidden md:inline-block md:mr-2">+966 55 518 2882</span> 
              <FaPhoneAlt className="text-2xl" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingIcons;
