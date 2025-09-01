"use client";
import React from "react";

const LeftSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* النص */}
      <div className="p-5 text-center w-full flex justify-center items-center">
        <h3 className="text-lg md:text-3xl p-1 font-mono font-black text-orange">
          اهلاً وسهلاً بكم في فاين كلين
        </h3>
      </div>

      {/* الصورة */}
      <div className="w-full relative h-[300px] lg:h-1/2 flex justify-center">
        <img
          src="/images/saudi-man.png"
          alt="hero-image"
          className="object-contain rounded-xl w-full h-full"
        />
      </div>

      {/* Video */}
      <div className="video w-[90%] h-auto mb-2 lg:mb-0 flex justify-center items-center">
        <video
          src="/videos/fine-video.mp4"
          controls
          aria-label="fine-video"
          className="w-full max-h-[300px] rounded-xl shadow-lg object-contain"
        />
      </div>

    </div>
  );
};

export default LeftSection;
