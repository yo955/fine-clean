"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaBroom,
  FaSnowflake,
  FaBug,
  FaWater,
  FaGem,
  FaTruck,
} from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      icon: <FaBroom className="text-orange text-3xl" />,
      title: "خدمات النظافة العامة",
      items: [
        "تنظيف المباني، الفلل، الشقق، العمائر، المكاتب، المعارض، والقاعات.",
        "غسيل وتلميع الأرضيات: الرخام، الجرانيت، السيراميك، والبلاط.",
        "تنظيف السجاد، الموكيت، الكنب، المجالس، الستائر، والشبابيك.",
        "تنظيف الواجهات الزجاجية والجرانيت.",
      ],
    },
    {
      icon: <FaSnowflake className="text-orange text-3xl" />,
      title: "خدمات المكيفات",
      items: [
        "تنظيف عميق: إزالة الأتربة والشوائب من الداخل والخارج لتحسين جودة الهواء.",
        "صيانة شاملة: فحص وإصلاح الأعطال لضمان أفضل أداء للمكيف (شباك – سبلت – دولاب).",
        "فك ونقل المكيفات.",
      ],
    },
    {
      icon: <FaBug className="text-orange text-3xl" />,
      title: "خدمات مكافحة الحشرات",
      items: [
        "رش المبيدات باستخدام مواد آمنة على الصحة تقضي بفعالية على الصراصير، النمل، البعوض، البق، والقوارض.",
        "تعقيم شامل: للمنازل، الشقق، الفلل، القصور، والفنادق.",
      ],
    },
    {
      icon: <FaGem className="text-orange text-3xl" />,
      title: "خدمات الجلي والتلميع",
      items: [
        "جلي وتلميع الرخام لإعادة اللمعان الطبيعي.",
        "تلميع الجرانيت وإزالة الخدوش والبقع.",
        "غسيل وصقل السيراميك والبلاط.",
        "معالجة الأرضيات الباهتة وإعادة بريقها.",
      ],
    },
    {
      icon: <FaWater className="text-orange text-3xl" />,
      title: "خدمات العزل ",
      items: [
        "عزل الإيبوكسي يحمي الخزانات من التسربات بفضل مقاومته العالية للرطوبة والحرارة.",
        "تنظيف الخزانات وتعقيمها قبل العزل مباشرةً ضروريان لضمان التصاق المادة وفعاليتها.",
      ],
    },
    {
      icon: <FaTruck className="text-orange text-3xl" />,
      title: "خدمات النقل",
      items: [
        "نقل الأثاث داخل وخارج مكة باحترافية وأمان.",
        "تغليف الأثاث لحمايته أثناء النقل.",
        "خدمات النقل للمنازل، المكاتب، والشركات.",
      ],
    },
  ];

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
            خدماتنا
          </motion.h1>
          <motion.p
            className="text-xl text-white font-almarai max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            نقدم مجموعة شاملة من خدمات التنظيف المتخصصة لجميع احتياجاتكم
          </motion.p>
        </section>

        {/* Services Grid */}
        <section className="bg-primary p-4 md:p-8 rounded-lg my-10">
          <motion.h2
            className="text-lg md:text-2xl font-bold mb-6 text-center text-orange"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            خدمات شركة فاين كلين للخدمات المنزلية المتكاملة
          </motion.h2>

          <motion.h3
            className="text-xl font-bold mb-6 text-center text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            (نظافة المباني- صيانة المكيفات- مكافحة الحشرات - عزل الخزنات- نقل
            اثاث)
          </motion.h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#2c2928] text-white p-5 border border-y-amber-500 border-x-amber-300 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex items-center gap-3 mb-3 text-orange">
                  {service.icon}
                  <h3 className="text-lg font-bold">{service.title}</h3>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-primary rounded-3xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-almarai font-bold text-orange mb-4">
              لماذا تختار خدماتنا؟
            </h2>
            <p className="text-lg text-white font-almarai max-w-2xl mx-auto">
              نحن نقدم خدمات تنظيف متخصصة وعالية الجودة مع ضمان الرضا التام
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-almarai font-bold text-orange mb-2">
                جودة عالية
              </h3>
              <p className="text-white font-almarai">
                نستخدم أفضل المواد وأحدث التقنيات
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-almarai font-bold text-orange mb-2">
                مواعيد مرنة
              </h3>
              <p className="text-white font-almarai">
                نعمل وفقاً لجدولكم الزمني
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-almarai font-bold text-orange mb-2">
                أسعار تنافسية
              </h3>
              <p className="text-white font-almarai">أفضل الأسعار في السوق</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="bg-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-almarai font-bold text-orange mb-2">
                ضمان الجودة
              </h3>
              <p className="text-white font-almarai">
                نضمن رضاكم التام أو استرداد المال
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <motion.div
            className="bg-primary p-8 border border-y-amber-500 border-x-amber-300 rounded-3xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-almarai font-bold text-orange mb-4">
              احصل على عرض سعر مجاني الآن
            </h2>
            <p className="text-xl text-white font-almarai mb-6">
              تواصل معنا للحصول على عرض سعر مخصص لاحتياجاتك
            </p>
            <a
              href="/contact"
              className="bg-orange text-white px-8 py-3 rounded-lg font-almarai font-bold hover:bg-orange-600 transition-colors inline-block"
            >
              احجز خدمتك الآن
            </a>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
