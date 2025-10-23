"use client";
import React from "react";
import { motion } from "framer-motion";
import MapComponent from "../_components/common/MapComponent";
import {
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-primary">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16">
          <motion.h1
            className="text-4xl md:text-6xl font-almarai font-bold text-orange mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            تواصل معنا
          </motion.h1>
          <motion.p
            className="text-xl text-white font-almarai max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            نحن هنا لخدمتكم، تواصلوا معنا للحصول على أفضل خدمات التنظيف
          </motion.p>
        </section>

        {/* Contact Information */}
        <div className="grid lg:grid-cols-2 gap-12 py-16">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-almarai font-bold text-orange mb-6">
              معلومات التواصل
            </h2>

            {/* Phone Numbers */}
            <div className="bg-[#2c2928] text-white p-6 border border-y-amber-500 border-x-amber-300 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <FaPhone className="text-orange text-2xl" />
                <h3 className="text-xl font-almarai font-bold text-orange">
                  الهاتف
                </h3>
              </div>
              <div className="space-y-3">
                <Link
                  href="https://wa.me/966555182882"
                  className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-2xl text-green-400" />
                  <span className="text-lg font-medium">+966 55 518 2882</span>
                </Link>
                <Link
                  href="tel:+966555182882"
                  className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPhone className="text-xl text-blue-400" />
                  <span className="text-lg font-medium">+966 55 518 2882</span>
                </Link>
              </div>
            </div>

            {/* Email */}
            <div className="bg-[#2c2928] text-white p-6 border border-y-amber-500 border-x-amber-300 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <FaEnvelope className="text-orange text-2xl" />
                <h3 className="text-xl font-almarai font-bold text-orange">
                  البريد الإلكتروني
                </h3>
              </div>
              <Link
                href="mailto:Fine.Clean@hotmail.com"
                className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="text-2xl text-red-400" />
                <span className="text-lg font-medium">Fine.Clean@hotmail.com</span>
              </Link>
            </div>

            {/* Location */}
            <div className="bg-[#2c2928] text-white p-6 border border-y-amber-500 border-x-amber-300 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <FaMapMarkerAlt className="text-orange text-2xl" />
                <h3 className="text-xl font-almarai font-bold text-orange">
                  العنوان
                </h3>
              </div>
              <p className="text-white font-almarai">
                المملكة العربية السعودية - مكة المكرمة
              </p>
            </div>
          </motion.div>

          {/* Social Media & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-almarai font-bold text-orange mb-6">
              وسائل التواصل الاجتماعي
            </h2>

            {/* Twitter */}
            <div className="bg-[#2c2928] text-white p-6 border border-y-amber-500 border-x-amber-300 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <FaTwitter className="text-orange text-2xl" />
                <h3 className="text-xl font-almarai font-bold text-orange">
                  تابعنا على تويتر
                </h3>
              </div>
              <Link
                href="http://www.twitter.com/FineClean2025"
                className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-3xl text-blue-400" />
                <span className="text-lg font-medium">تابعنا على تويتر</span>
              </Link>
            </div>

            {/* Quick Action Buttons */}
            <div className="bg-[#2c2928] text-white p-6 border border-y-amber-500 border-x-amber-300 rounded-xl shadow-lg">
              <h3 className="text-xl font-almarai font-bold text-orange mb-4">
                اتصل بنا الآن
              </h3>
              <div className="space-y-4">
                <Link
                  href="https://wa.me/966555182882"
                  className="group block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 justify-center">
                    <FaWhatsapp className="text-2xl" />
                    <span>اطلب عبر واتساب</span>
                  </button>
                </Link>

                <Link
                  href="tel:+966555182882"
                  className="group block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg px-6 py-4 rounded-xl border border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 justify-center">
                    <FaPhone className="text-lg" />
                    <span>اتصل بنا</span>
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <section className="py-16">
          <motion.h2
            className="text-3xl font-almarai font-bold text-orange mb-6 text-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            موقعنا على الخريطة
          </motion.h2>
          <motion.div
            className="bg-primary h-[500px] rounded-3xl flex items-center justify-center border border-y-amber-500 border-x-amber-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <MapComponent
              width={100}
              radius={10}
              className="w-full rounded-3xl mx-auto max-w-[98%] max-h-[98%]"
            />
          </motion.div>
        </section>
      </main>
    </div>
  );
}
