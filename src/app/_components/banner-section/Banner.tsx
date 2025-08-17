"use client";
import React from "react";
import { motion } from "framer-motion";
import "./banner.css";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="container w-full flex flex-col justify-center items-center">
        <div className="content m-1 md:m-5 flex flex-col gap-4 text-center">
          <motion.h1
            className="text-xl md:text-3xl lg:text-4xl text-orange font-bold"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            فاين كلين – رفاهية النظافة ✨
          </motion.h1>

          <motion.p
            className="text-white text-md md:text-lg leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            لأن المكان يعكس ذوق صاحبه، نحن في{" "}
            <strong>شركة فاين كلين للصيانة والنظافة</strong> نمنحك خدمة تنظيف
            راقية، بأدق التفاصيل، وبأعلى معايير الجودة. نستخدم تقنيات متطورة
            ومواد آمنة لنترك وراءنا بيئة نظيفة، أنيقة، ومليئة بالانتعاش.
          </motion.p>

          <motion.p
            className="text-orange text-md md:text-xl font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            💎 فاين كلين… فخامة تليق بمكانك
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
