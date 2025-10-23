"use client";
import React from "react";

import { motion } from "framer-motion";

export default function MessagesPage() {
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
            رسالتنا
          </motion.h1>
          <motion.p 
            className="text-xl text-white font-almarai max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            رسالتنا واضحة: تقديم أفضل خدمات التنظيف لعملائنا الكرام
          </motion.p>
        </section>

        {/* Main Message */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-primary p-8 border border-y-amber-500 border-x-amber-300 rounded-xl shadow-lg mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-almarai font-bold text-orange mb-6 text-center">
                رسالتنا الأساسية
              </h2>
              <p className="text-lg text-white font-almarai text-center leading-relaxed">
                نحن في فاين كلين نؤمن بأن النظافة هي أساس الحياة الصحية والراحة النفسية. 
                لذلك نسعى جاهدين لتقديم خدمات تنظيف متخصصة وعالية الجودة تلبي احتياجات 
                عملائنا الكرام في جميع أنحاء المملكة العربية السعودية.
              </p>
            </motion.div>

            {/* Values Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div 
                className="bg-[#2c2928] text-white p-6 border border-y-amber-500 border-x-amber-300 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-almarai font-bold text-orange mb-4">
                  الجودة أولاً
                </h3>
                <p className="text-white font-almarai">
                  نلتزم بأعلى معايير الجودة في جميع خدماتنا، ونستخدم أحدث التقنيات 
                  والمواد الآمنة لضمان أفضل النتائج.
                </p>
              </motion.div>

              <motion.div 
                className="bg-[#2c2928] text-white p-6 border border-y-amber-500 border-x-amber-300 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl font-almarai font-bold text-orange mb-4">
                  رضا العملاء
                </h3>
                <p className="text-white font-almarai">
                  رضا عملائنا هو هدفنا الأول، ونعمل بجد لضمان تجربة ممتازة 
                  وخدمة متميزة في كل مرة.
                </p>
              </motion.div>

              <motion.div 
                className="bg-[#2c2928] text-white p-6 border border-y-amber-500 border-x-amber-300 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-2xl font-almarai font-bold text-orange mb-4">
                  الالتزام بالمواعيد
                </h3>
                <p className="text-white font-almarai">
                  نحترم وقت عملائنا ونلتزم بالمواعيد المحددة، ونقدم خدمات 
                  سريعة وفعالة دون تأخير.
                </p>
              </motion.div>

              <motion.div 
                className="bg-[#2c2928] text-white p-6 border border-y-amber-500 border-x-amber-300 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h3 className="text-2xl font-almarai font-bold text-orange mb-4">
                  الشفافية والأمانة
                </h3>
                <p className="text-white font-almarai">
                  نتعامل مع عملائنا بشفافية كاملة، ونقدم أسعار واضحة وعادلة 
                  دون أي تكاليف مخفية.
                </p>
              </motion.div>
            </div>

            {/* Commitment Section */}
            <motion.div 
              className="bg-primary p-8 border border-y-amber-500 border-x-amber-300 rounded-3xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-almarai font-bold text-orange mb-6 text-center">
                التزامنا تجاهكم
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h4 className="text-xl font-almarai font-bold text-orange mb-2">
                    الضمان
                  </h4>
                  <p className="text-white font-almarai">
                    نضمن جودة خدماتنا ونقدم ضمان شامل على جميع أعمالنا
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="text-xl font-almarai font-bold text-orange mb-2">
                    السرعة
                  </h4>
                  <p className="text-white font-almarai">
                    نقدم خدمات سريعة وفعالة دون المساس بجودة العمل
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💚</span>
                  </div>
                  <h4 className="text-xl font-almarai font-bold text-orange mb-2">
                    البيئة
                  </h4>
                  <p className="text-white font-almarai">
                    نستخدم مواد صديقة للبيئة وآمنة على الصحة
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

    </div>
  );
}
