"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Advantages = () => {
  const reasons = [
    "✨ كل زاوية، كل تفصيلة... نحن نهتم بها",
    "🎨 النظافة فن... وفاين كلين الفنان - نحوّل المكان لتحفة مريحة للعين",
    "💎 فاين كلين - رفاهية التفاصيل - لأن النظافة الراقية ليست خيارًا... بل أسلوب حياة",
    "🌿 مو بس نظافة... إحساس جديد للمكان - حيث الجودة تلتقي بالأناقة",
    "🏛 فاين كلين - انطباع أول لا يُنسى - نترك المكان يروي عن ذوقك بدون كلمة"
  ];

  const features = [
    { title: "فريق محترف", desc: "فريق تنظيف مدرب ومحترف بأعلى معايير الجودة" },
    { title: "أسعار تنافسية", desc: "نقدم أسعارًا وصفقات في متناول الجميع" },
    { title: "ضمان الجودة", desc: "خدماتنا قابلة للاسترداد إذا لم تكن راضيًا" },
    { title: "موثوقية", desc: "التزام بالمواعيد وإنجاز العمل في الوقت المحدد" }
  ];

  return (
    <section className="max-w-[90%] mx-auto my-20 bg-orange px-2 py-8 md:p-8 rounded-3xl shadow-xl">
      <div className="container mx-auto">
        {/* العنوان الرئيسي */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            لماذا تختار خدمتنا؟
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            نوفر حلولاً متكاملة لتنظيف وصيانة مساحتك باحترافية وجودة عالية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* العمود الأيسر - الخدمات */}
          <motion.div
            className="h-full bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/20 flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">
              فاين كلين - لمعة تليق بمكانك
            </h3>
            <ul className="space-y-6 flex-grow">
              {reasons.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="bg-orange-300/80 p-1 rounded-full mr-4 flex-shrink-0 mt-1"></div>
                  <p className="text-lg md:text-lg text-white/90 leading-relaxed">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* العمود الأيمن - المميزات */}
          <motion.div
            className="h-full bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/20 flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">
              مميزاتنا
            </h3>
            <ul className="space-y-6 flex-grow">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="bg-orange-300/80 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{feature.title}</h4>
                    <p className="text-white/90">{feature.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* قسم ضمان الجودة */}
        <motion.div
          className="mt-12 bg-white/20 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/30 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            ضمان رضاك هو أولويتنا
          </h3>
          <p className="text-xl text-white max-w-3xl mx-auto">
            نضمن لك الحصول على خدمة ممتازة تلبي توقعاتك، مع فريق دعم متاح على مدار الساعة
          </p>
          <div className="mt-auto pt-6">
            <Link href="https://wa.me/966555182882" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="w-full md:w-1/2 bg-orange text-white hover:bg-yellow-600 text-xl font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                اطلب الآن
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;
