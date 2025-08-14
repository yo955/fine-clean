import React from "react";
import VideoCommon from "../common/Video";
import Link from "next/link";

const RightSections = () => {
  return (
    <div className="h-full bg-orange text-white p-8 relative overflow-hidden border-2 border-amber-500 rounded-lg">
      {/* خلفية ديكوريّة */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-yellow-200 rounded-full blur-2xl"></div>
      </div>
      
      {/* المحتوى الرئيسي */}
      <div className="relative z-10">
        <div className="description mb-5">
          <p className="w-full text-wrap text-justify text-sm md:text-base leading-5 lg:leading-6">
            من أجلكم أنتـم ..
            <br />
            نحن شركة فاين كلين ( فاين كلين للنظافة والصيانة بمكة المكرمة ) ولتقديم المجالات
            الخدمية واللوجستية التالية:-
            <br />
            شركة تنظيف مباني، قصور، عمائر، منازل، فلل، شقق، بيوت، مكاتب، معارض، صالات، غرف، صالونات، مجالس، كنب، سجاد، موكيت، ستائر، أبواب، شبابيك، قاعات، كوفي شوب، تلميع وجلي رخام، جرانيت، درج، سيراميك، بلاط، أرضيات، أسطح، ثيل، مسطحات خضراء، ملاعب، غسيل، عزل خزانات، مكيفات، مطبخ، واجهات زجاجية وحجرية، فك وتركيب شبك حمام، صيانة مكيفات، إزالة مخلفات، استكرات، مكافحة حشرات مع تعقيم، وذلك بأعلى معايير الجودة وباستخدام أحدث المواد والمعدات العالمية.

            وتعد فاين كلين من أفضل شركات التنظيف والصيانة بمكة المكرمة.
          </p>
        </div>
        <div className="inline-block">
          <Link
            href="https://wa.me/966555182882"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-amber-600 text-xl font-bold flex justify-center items-center p-2 md:p-3 lg:p-4 border-2 border-white rounded-full w-40 shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)] hover:bg-amber-50 transition-all duration-300 transform hover:scale-105">
              اطلب الآن
            </button>
          </Link>
        </div>
        <div className="video mt-10 h-[250px] flex justify-center items-center">
          <VideoCommon
            url="/videos/main-video.mp4"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSections;