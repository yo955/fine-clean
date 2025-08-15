import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="container w-full flex flex-col justify-center items-center">
        <div className="content m-5 flex flex-col gap-4 text-center">
          <h1 className="text-3xl lg:text-4xl text-orange font-bold">
            فاين كلين – رفاهية النظافة ✨
          </h1>
          <p className="text-white text-lg leading-relaxed max-w-2xl">
            لأن المكان يعكس ذوق صاحبه، نحن في{" "}
            <strong>شركة فاين كلين للصيانة والنظافة</strong> نمنحك خدمة تنظيف
            راقية، بأدق التفاصيل، وبأعلى معايير الجودة. نستخدم تقنيات متطورة
            ومواد آمنة لنترك وراءنا بيئة نظيفة، أنيقة، ومليئة بالانتعاش.
          </p>
          <p className="text-orange text-xl font-semibold">
            💎 فاين كلين… فخامة تليق بمكانك
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
