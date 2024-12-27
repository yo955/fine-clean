"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const RightSections = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="h-full bg-primary text-white p-8">
      <div className="description mb-5">
        <p className="w-full text-wrap text-justify text-sm md:text-base leading-5 lg:leading-6">
          من أجلكم أنتـم ..
          <br />
          نحن شركة آمكو المتحدة للمقاولات والانشاء والتعمير ولتقديم المجالات
          الخدمية واللوجستية التالية:-
          <br />
          شركة تنظيف مبنى مباني قصر قصور عماره عمائر منزل منازل نظافة فيلا فلل
          شقه شقق بيت بيوت مكتب مكاتب معرض معارض صالة غرفة صالون مجلس مجالس كنب
          سجاد موكيت ستائر ابواب شبابيك قاعه كوفي شوب تلميع جلي رخام جرانيت درج
          سيراميك بلاط ارضيات سطح سطوح ثيل مسطحات خضراء ملاعب غسيل عزل خزان
          خزانات مكيف مطبخ واجهة زجاج واجهات حجرية نقل اثاث عفش بالرياض مع ضمان
          الفك تركيب شبك حمام صيانة مكيفات إزالة مخلفات استكرات مكافحة حشرات مع
          التعقيم وذلك على اعلى معايير الجودة وبواسطة احدث المواد المعدات
          العالمية وتعد اسادكو من افضل الشركات كذلك تعبر شركات الرياض والمملكة
        </p>
      </div>
      <button className="bg-orange text-xl font-bold flex justify-center items-center p-2 md:p-3 lg:p-4 border-none rounded-full w-40 shadow-gray hover:shadow-md hover:bg-amber-400 transition-all duration-300">
        اطلب الآن
      </button>
      <div className="video mt-10 h-[250px] flex justify-center items-center">
        {isClient && (
          <ReactPlayer
            url="https://youtu.be/-Wi8YgylkUk"
            width="90%"
            height="100%"
            controls
          />
        )}
      </div>
    </div>
  );
};

export default RightSections;
