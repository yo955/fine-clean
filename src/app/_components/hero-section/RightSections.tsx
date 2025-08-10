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
          نحن شركة فاين كلين (  فاين كلين للنظافة والصيانة بمكة المكرمة ) ولتقديم المجالات
          الخدمية واللوجستية التالية:-
          <br />
          شركة تنظيف مباني، قصور، عمائر، منازل، فلل، شقق، بيوت، مكاتب، معارض، صالات، غرف، صالونات، مجالس، كنب، سجاد، موكيت، ستائر، أبواب، شبابيك، قاعات، كوفي شوب، تلميع وجلي رخام، جرانيت، درج، سيراميك، بلاط، أرضيات، أسطح، ثيل، مسطحات خضراء، ملاعب، غسيل، عزل خزانات، مكيفات، مطبخ، واجهات زجاجية وحجرية، فك وتركيب شبك حمام، صيانة مكيفات، إزالة مخلفات، استكرات، مكافحة حشرات مع تعقيم، وذلك بأعلى معايير الجودة وباستخدام أحدث المواد والمعدات العالمية.

           وتعد فاين كلين من أفضل شركات مكة المكرمة.

          نقل العفش (الأثاث) بمكة المكرمة مع ضمان الفك والتركيب.
        </p>
      </div>
      <Link
        href="https://wa.me/966555182882"
        className="text-white transition hover:text-gray-500/75 text-xl "
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
