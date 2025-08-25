"use client";
import React from "react";
import { FaBroom, FaSnowflake, FaBug, FaWater, FaGem, FaTruck } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
    {
        icon: <FaBroom className="text-orange text-3xl" />,
        title: "خدمات النظافة العامة",
        items: [
            "تنظيف المباني، الفلل، الشقق، العمائر، المكاتب، المعارض، والقاعات.",
            "غسيل وتلميع الأرضيات: الرخام، الجرانيت، السيراميك، والبلاط.",
            "تنظيف السجاد، الموكيت، الكنب، المجالس، الستائر، والشبابيك.",
            "تنظيف الواجهات الزجاجية والجرانيت."
        ]
    },
    {
        icon: <FaSnowflake className="text-orange text-3xl" />,
        title: "خدمات المكيفات",
        items: [
            "تنظيف عميق: إزالة الأتربة والشوائب من الداخل والخارج لتحسين جودة الهواء.",
            "صيانة شاملة: فحص وإصلاح الأعطال لضمان أفضل أداء للمكيف (شباك – سبلت – دولاب).",
            "فك ونقل المكيفات."
        ]
    },
    {
        icon: <FaBug className="text-orange text-3xl" />,
        title: "خدمات مكافحة الحشرات",
        items: [
            "رش المبيدات باستخدام مواد آمنة على الصحة تقضي بفعالية على الصراصير، النمل، البعوض، البق، والقوارض.",
            "تعقيم شامل: للمنازل، الشقق، الفلل، القصور، والفنادق."
        ]
    },
    {
        icon: <FaGem className="text-orange text-3xl" />,
        title: "خدمات الجلي والتلميع",
        items: [
            "جلي وتلميع الرخام لإعادة اللمعان الطبيعي.",
            "تلميع الجرانيت وإزالة الخدوش والبقع.",
            "غسيل وصقل السيراميك والبلاط.",
            "معالجة الأرضيات الباهتة وإعادة بريقها."
        ]
    },
    {
        icon: <FaWater className="text-orange text-3xl" />,
        title: "خدمات العزل ",
        items: [
            "عزل الإيبوكسي يحمي الخزانات من التسربات بفضل مقاومته العالية للرطوبة والحرارة.",
            "تنظيف الخزانات وتعقيمها قبل العزل مباشرةً ضروريان لضمان التصاق المادة وفعاليتها.",
        ]
    },
    {
        icon: <FaTruck  className="text-orange text-3xl" />,
        title: "خدمات النقل",
        items: [
            "نقل الأثاث داخل وخارج مكة باحترافية وأمان.",
            "تغليف الأثاث لحمايته أثناء النقل.",
            "خدمات النقل للمنازل، المكاتب، والشركات."

        ]
    },
];

const ServicesSection = () => {
    return (
        <section className="bg-primary p-4 md:p-8 rounded-lg my-10">
            <motion.h2
                className="text-lg md:text-2xl font-bold mb-6 text-center text-orange"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                خدمات شركة فاين كلين للخدمات المتكاملة
            </motion.h2>

            <motion.h3
                className="text-xl font-bold mb-6 text-center text-white"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                (نظافة المباني- صيانة المكيفات- رش المبيدات - عزل الخزنات- نقل اثاث)
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
    );
};

export default ServicesSection;
