import React from "react";
import VideoCommon from "../common/Video";
import Link from "next/link";

const RightSections = () => {
  return (
    <div className="h-full bg-primary text-white p-8">
      <div className="description mb-5">
        <p className="w-full text-wrap text-justify text-sm md:text-base leading-5 lg:leading-6">
          من أجلكم أنتـم ..
          <br />
          نحن شركة آمكو النموذجية للمقاولات والانشاء والتعمير ولتقديم المجالات
          الخدمية واللوجستية التالية:-
          <br />
          شركة تنظيف مبنى مباني قصر قصور عماره عمائر منزل منازل نظافة فيلا فلل
          شقه شقق بيت بيوت مكتب مكاتب معرض معارض صالة غرفة صالون مجلس مجالس كنب
          سجاد موكيت ستائر ابواب شبابيك قاعه كوفي شوب تلميع جلي رخام جرانيت درج
          سيراميك بلاط ارضيات سطح سطوح ثيل مسطحات خضراء ملاعب غسيل عزل خزان
          خزانات مكيف مطبخ واجهة زجاج واجهات حجرية نقل اثاث عفش بالرياض مع ضمان
          الفك تركيب شبك حمام صيانة مكيفات إزالة مخلفات استكرات مكافحة حشرات مع
          التعقيم وذلك على اعلى معايير الجودة وبواسطة احدث المواد المعدات
          العالمية وتعد امكو من افضل الشركات كذلك تعبر شركات الرياض والمملكة
        </p>
      </div>
      <Link
        href="https://wa.me/966501144066"
        className="text-white transition hover:text-gray-500/75 text-xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-orange text-xl font-bold flex justify-center items-center p-2 md:p-3 lg:p-4 border-none rounded-full w-40 shadow-gray hover:shadow-md hover:bg-amber-400 transition-all duration-300">
          اطلب الآن
        </button>
      </Link>
      <div className="video mt-10 h-[250px] flex justify-center items-center">
        <VideoCommon 
          url="/videos/main-video.mp4" 
          width={100} 
          height={100} 
        />
      </div>
    </div>
  );
};

export default RightSections;
