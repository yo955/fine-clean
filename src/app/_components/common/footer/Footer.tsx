import {
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="relative bg-primary text-white mt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      {/* Floating shapes for visual interest */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>

      <div className="relative container px-5 mx-auto py-12">
        {/* Top Section - Call to Action */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-y-amber-400 border-x-orange shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-right ">
                <h2 className="text-2xl md:text-4xl font-bold font-almarai mb-4 leading-relaxed">
                  هل أنت مستعد الآن لكي تصبح أحد عملاء
                  <span className="block text-yellow-300">شركة فاين كلين؟</span>
                </h2>
                <p className="text-lg md:text-xl opacity-90 font-medium">
                  اتصل بنا وكن أحد عملائنا المميزين
                </p>
              </div>

              <div className="flex flex-col gap-4 ">
                <Link
                  href="https://wa.me/966555182882"
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center">
                    <FaWhatsapp className="text-2xl" />
                    <span>اطلب الآن</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">←</span>
                  </button>
                </Link>

                <Link
                  href="tel:+966555182882"
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg px-8 py-3 rounded-2xl border border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center">
                    <FaPhone className="text-lg" />
                    <span>اتصل بنا</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          {/* Contact Information */}
          <div className="text-center md:text-right space-y-6 hidden md:block ">
            <h3 className="text-2xl font-bold font-arabic mb-6 flex items-center justify-center md:justify-end gap-3">
              <FaPhone className="text-yellow-300" />
              تواصل معنا
            </h3>

            <div className="space-y-4 ">
              <Link
                href="https://wa.me/966555182882"
                className="group flex items-center justify-center md:justify-end gap-3 p-4 rounded-xl border border-y-amber-400 border-x-orange bg-white/5 hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-lg font-medium">‏‎+966 55 518 2882‎‏</span>
                <FaWhatsapp className="text-3xl text-green-400 group-hover:scale-110 transition-transform duration-300" />
              </Link>

              <Link
                href="tel:+966555182882"
                className="group border border-y-amber-400 border-x-orange flex items-center justify-center md:justify-end gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300  hover:border-white/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-lg font-medium">‏‎+966 55 518 2882‎‏</span>
                <FaPhone className="text-2xl text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Company Info */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold font-arabic mb-6">
              شركة فاين كلين
            </h3>

            <div className="bg-white/5 border border-y-amber-400 border-x-orange rounded-xl p-6 ">
              <p className="text-lg font-medium mb-4">
                خدمات التنظيف المتخصصة
              </p>
              <div className="flex items-center justify-center gap-2 text-yellow-300">
                <FaMapMarkerAlt />
                <span>المملكة العربية السعودية - مكة المكرمة</span>
              </div>
            </div>
          </div>

          {/* Social Media & Email */}
          <div className="text-center md:text-left space-y-6">
            <h3 className="text-2xl font-bold font-arabic mb-6 flex items-center justify-center md:justify-start gap-3">
              تابعنا
              <FaTwitter className="text-blue-400" />
            </h3>

            <div className="space-y-4">
              <Link
                href="mailto:Fine.Clean@hotmail.com"
                className="group flex items-center border border-y-amber-400 border-x-orange justify-center md:justify-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300  hover:border-white/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="text-2xl text-red-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm md:text-base font-medium break-all">Fine.Clean@hotmail.com</span>
              </Link>

              <Link
                href="http://www.twitter.com/FineClean2025"
                className="group flex items-center border border-y-amber-400 border-x-orange justify-center md:justify-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300  hover:border-white/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-3xl text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg font-medium">تابعنا على تويتر</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-orange text-center">
          <p className="text-white/70 font-medium">
            © 2025 شركة فاين كلين - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};