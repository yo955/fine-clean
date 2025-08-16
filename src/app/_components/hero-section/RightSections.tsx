"use client";
import { motion } from "framer-motion";

const RightSections = () => {
  return (
    <div
      className="h-full bg-primary  p-8 relative overflow-hidden border border-y-yellow-400 border-x-yellow-600 rounded-lg"
    >

      {/* المحتوى الرئيسي */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
      >
        <div className="description mb-5">
          <motion.h1
            className="text-lg md:text-xl font-bold mb-3 text-orange leading-relaxed text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            شركة فاين كلين للخدمات المتكاملة بمكة المكرمة
            <br />
            <span className="text-orange font-semibold">
              (نظافة المنازل - صيانة المكيفات - رش المبيدات الحشرية - عزل الخزانات - نقل الأثاث)
            </span>
            <br />
          </motion.h1>


          <motion.h2
            className="text-base text-orange md:text-lg font-semibold mt-4 mb-3 text-"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            * خدماتنا تشتمل التالي *
          </motion.h2>

          {/* خدمة نظافة المنازل */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <h3 className="font-semibold mb-2 text-orange">⁠* خدمة نظافة المنازل:</h3>
            <p className="text-sm md:text-base text-justify leading-6 text-orange">
              تخيل منزلك يتحول إلى واحة متلألئة من النقاء، حيث يتدخل فريقنا بلمسة
              فنية ليُزيل كل أثر للتعب، مُستخدمين أحدث تقنيات التنظيف بالبخار
              والمواد الآمنة بيئيًا. نُعيد البريق لأرضياتك، ونُنعش مفروشاتك،
              ونُعقم كل زاوية لتنعم ببيئة صحية تُلامس الروح وتُجدد طاقتك.
            </p>
          </motion.div>

          {/* خدمة صيانة المكيفات */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <h3 className="font-semibold mb-2 text-orange">⁠* خدمة صيانة المكيفات:</h3>
            <p className="text-sm md:text-base text-justify leading-6 text-orange">
              في قلب حرارة مكة، نُعيد لمكيفاتك همس الانتعاش البارد! ففريقنا من
              الخبراء يُقدم صيانة دقيقة وشاملة تُطيل عمر جهازك، وتُحسن جودة الهواء،
              وتُخفض فواتيرك. استمتع بجو مثالي يُقاوم القيظ ويُجدد حيويتك، مع
              ضمان أداء لا يُضاهى وراحة بال تدوم طوال العام.
            </p>
          </motion.div>

          {/* خدمة رش المبيدات */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            <h3 className="font-semibold mb-2 text-orange">* خدمة رش المبيدات الحشرية:</h3>
            <p className="text-sm md:text-base text-justify leading-6 text-orange">
              ودّع القلق من أي زائر غير مرغوب فيه! نُبيد الآفات ببراعة فائقة وأمان
              مطلق، مُستخدمين مبيدات عصرية عديمة الرائحة ومُعتمدة عالميًا، آمنة
              تمامًا على عائلتك وحيواناتك الأليفة. نُقدم لك درعًا واقيًا لمنزلك،
              مع ضمانات طويلة الأمد تُعيد لك الطمأنينة وتُحوّل مساحتك إلى ملاذ آمن
              ونظيف.
            </p>
          </motion.div>

          {/* خدمة عزل الخزانات */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.5 }}
          >
            <h3 className="font-semibold mb-2 text-orange">* خدمة عزل الخزانات:</h3>
            <p className="text-sm md:text-base text-justify leading-6 text-orange">
              حافظ على كنز النقاء في منزلك! نُحصّن خزاناتك بأساليب مبتكرة ومواد
              عزل فائقة الجودة كالإيبوكسي، لنضمن نقاء مياهك وحمايتها من أي تسرب أو
              تلوث. استثمر في صحتك وراحة بالك مع درع حصين يُطيل عمر خزانك ويُوفر
              لك مياهًا نقية وصحية بلا حدود.
            </p>
          </motion.div>

          {/* خدمة نقل الأثاث */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.7 }}
          >
            <h3 className="font-semibold mb-2 text-orange">* خدمة نقل الأثاث:</h3>
            <p className="text-sm md:text-base text-justify leading-6 text-orange">
              اجعل انتقالك رحلة فاخرة بلا عناء! نُحوّل مهمة نقل أثاثك إلى تجربة
              سلسة ومُبهرة، حيث يُعامل فريقنا المحترف كل قطعة من كنوزك الثمينة
              بدقة متناهية. من التغليف الفني بأجود المواد، وصولًا للتركيب المثالي
              في منزلك الجديد، نُقدم لك اطمئنانًا مطلقًا وضمانًا حقيقيًا يُحافظ
              على كل قطعة كأنها لم تُغادر مكانها.
            </p>
          </motion.div>
        </div>

        {/* زرار واتساب */}
        <motion.div
          className="inline-block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 2 }}
        >

        </motion.div>
      </motion.div>
    </div>
  );
};

export default RightSections;
