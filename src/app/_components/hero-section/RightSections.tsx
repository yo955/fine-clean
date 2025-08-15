"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const RightSections = () => {
  return (
    <motion.div
      className="h-full bg-orange text-white p-8 relative overflow-hidden border-2 border-amber-500 rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* خلفية ديكوريّة */}
      <motion.div
        className="absolute inset-0 opacity-15"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-yellow-200 rounded-full blur-2xl"></div>
      </motion.div>

      {/* المحتوى الرئيسي */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
      >
        <div className="description mb-5">
          <motion.h1
            className="text-lg md:text-xl font-bold mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            شركة فاين كلين للنظافة والصيانة بمكة المكرمة
          </motion.h1>

          <motion.p
            className="w-full text-wrap text-justify text-sm md:text-base leading-5 lg:leading-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            في <strong>فاين كلين</strong>، نقدم خدمات تنظيف وصيانة احترافية في مكة
            المكرمة بأعلى معايير الجودة، باستخدام أحدث المعدات والمواد العالمية
            الصديقة للبيئة.
          </motion.p>

          <motion.h2
            className="text-base md:text-lg font-semibold mt-4 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            خدماتنا تشمل:
          </motion.h2>

          <motion.ul
            className="list-disc pl-5 space-y-1 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <li>تنظيف المباني، الفلل، الشقق، العمائر، المكاتب، المعارض، والقاعات.</li>
            <li>غسيل وتلميع الأرضيات، الرخام، الجرانيت، السيراميك، والبلاط.</li>
            <li>تنظيف السجاد، الموكيت، الكنب، المجالس، الستائر، والأبواب والشبابيك.</li>
            <li>
              عزل وصيانة الخزانات والمكيفات، وتنظيف المطابخ والواجهات الزجاجية
              والحجرية.
            </li>
            <li>إزالة المخلفات، مكافحة الحشرات، التعقيم، وتركيب شبك الحمام.</li>
            <li>تنسيق المسطحات الخضراء، الثيل، والملاعب.</li>
          </motion.ul>

          <motion.p
            className="mt-4 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            نحن نلتزم بتقديم خدمات عالية الجودة تلبي توقعات عملائنا في مكة
            المكرمة، مما يجعلنا واحدة من أفضل{" "}
            <strong>شركات التنظيف والصيانة</strong> في المنطقة.
          </motion.p>
        </div>

        <motion.div
          className="inline-block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.5 }}
        >
          <Link
            href="https://wa.me/966555182882"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-amber-600 text-xl font-bold flex justify-center items-center p-2 md:p-3 lg:p-4 border-2 border-white rounded-full w-40 shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)] hover:bg-amber-50 transition-all duration-300 transform hover:scale-105">
              اطلب الآن
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RightSections;
