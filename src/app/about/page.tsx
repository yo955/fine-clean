"use client";
import React from "react";

import { motion } from "framer-motion";

export default function AboutPage() {
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
            من نحن
          </motion.h1>
          <motion.p 
            className="text-xl text-white font-almarai max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            نحن شركة فين كلين، رائدون في مجال خدمات التنظيف المتخصصة في المملكة العربية السعودية
          </motion.p>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="bg-[#2c2928] text-white p-8 border border-y-amber-500 border-x-amber-300 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-almarai font-bold text-orange mb-6">
                رؤيتنا
              </h2>
              <p className="text-lg text-white font-almarai mb-6">
                أن نكون الشركة الرائدة في مجال خدمات التنظيف في المملكة العربية السعودية، 
                وأن نقدم خدمات عالية الجودة تلبي احتياجات عملائنا الكرام.
              </p>
              
              <h2 className="text-3xl font-almarai font-bold text-orange mb-6">
                مهمتنا
              </h2>
              <p className="text-lg text-white font-almarai">
                تقديم خدمات تنظيف متخصصة وعالية الجودة باستخدام أحدث التقنيات 
                والمواد الآمنة، مع فريق عمل مدرب ومحترف لضمان رضا عملائنا.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-[#2c2928] text-white p-8 border border-y-amber-500 border-x-amber-300 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-almarai font-bold text-orange mb-4">
                لماذا تختار فين كلين؟
              </h3>
              <ul className="space-y-3 text-white font-almarai">
                <li className="flex items-center">
                  <span className="text-orange ml-2">✓</span>
                  فريق عمل مدرب ومحترف
                </li>
                <li className="flex items-center">
                  <span className="text-orange ml-2">✓</span>
                  مواد تنظيف آمنة وصديقة للبيئة
                </li>
                <li className="flex items-center">
                  <span className="text-orange ml-2">✓</span>
                  أسعار تنافسية ومناسبة
                </li>
                <li className="flex items-center">
                  <span className="text-orange ml-2">✓</span>
                  ضمان الجودة والرضا
                </li>
                <li className="flex items-center">
                  <span className="text-orange ml-2">✓</span>
                  خدمة عملاء على مدار الساعة
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary rounded-3xl">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-3xl font-almarai font-bold text-orange">500+</h3>
              <p className="text-white font-almarai">عميل راضي</p>
            </div>
            <div>
              <h3 className="text-3xl font-almarai font-bold text-orange">3+</h3>
              <p className="text-white font-almarai">سنوات خبرة</p>
            </div>
            <div>
              <h3 className="text-3xl font-almarai font-bold text-orange">24/7</h3>
              <p className="text-white font-almarai">خدمة عملاء</p>
            </div>
            <div>
              <h3 className="text-3xl font-almarai font-bold text-orange">100%</h3>
              <p className="text-white font-almarai">ضمان الجودة</p>
            </div>
          </motion.div>
        </section>
      </main>

    </div>
  );
}
