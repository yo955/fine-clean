import React from "react";
import VideoCommon from "../common/Video";
import Link from "next/link";

const Advantages = () => {
  return (
    <section className="max-w-[90%] mx-auto my-20 bg-primary px-2 py-4 md:p-5 rounded-[50px]">
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div className="right mx-5">
          <div className="content">
            <div className="title shadow-black_gray  shadow-sm  text-center rounded-full ">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-orange mb-10 p-4">
                لماذا تختار خدمتنا؟
              </h2>
            </div>
            <div className="description text-white ">
              <ul className="flex flex-col gap-4">
                <li className="text-lg md:text-xl flex gap-6 md:gap-8 lg:gap-10">
                  <span className="text-xl text-orange">✔</span>
                  <p>فريق تنظيف محترف</p>
                </li>
                <li className="text-base  md:text-xl flex gap-6 md:lg:gap-8 lg:gap-10">
                  <span className="text-xl text-orange">✔</span>
                  <p>تقدم أسعارًا وصفقات في متناول الجميع</p>
                </li>
                <li className="text-base md:text-xl flex gap-6 md:lg:gap-8 lg:gap-10">
                  <span className="text-xl text-orange">✔</span>
                  <p>قابلة للاسترداد إذا لم تكن نظيفة</p>
                </li>
              </ul>
            </div>
          </div>
          <Link
            href="https://wa.me/0501144066"
            className="text-white transition hover:text-gray-500/75 text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="btn my-10">
              <button className="bg-orange text-xl font-bold flex justify-center items-center p-3 md:p-4 border-none rounded-full w-40 shadow-sm shadow-gray hover:shadow-md hover:bg-amber-400 transition-all duration-300 text-white">
                اطلب الآن
              </button>
            </div>
          </Link>
        </div>
        <div className="left grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
          <div className="video  h-[200px] flex justify-center items-center">
            <VideoCommon url="/videos/video-1.mp4" width={100} height={100} />
          </div>
          <div className="video  h-[200px] flex justify-center items-center">
            <VideoCommon url="/videos/video-2.mp4" width={100} height={100} />
          </div>
          <div className="video h-[200px] flex justify-center items-center">
            <VideoCommon url="/videos/video-3.mp4" width={100} height={100} />
          </div>
          <div className="video  h-[200px] flex justify-center items-center">
            <VideoCommon url="/videos/video-4.mp4" width={100} height={100} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
