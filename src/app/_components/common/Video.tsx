"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ReactPlayer = dynamic(() => import("react-player"), { 
  ssr: false,
  loading: () => <div className="loading-placeholder bg-gray-200 animate-pulse" style={{width: '100%', height: '100%'}} />
});

interface VideoProps {
  width: number;
  height: number;
  url: string;
  thumbnailUrl?: string;
}

const VideoCommon: React.FC<VideoProps> = ({
  width = 100,
  height = 100,
  url = "/videos/video-1.mp4",
  thumbnailUrl,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setHasInteracted(true);
  };

  return (
    <div className="relative w-full h-full">
      {isClient && (
        <>
          {!hasInteracted && thumbnailUrl && (
            <div className="relative w-full h-full cursor-pointer" onClick={handlePlayClick}>
              <Image 
                src={thumbnailUrl} 
                alt="Video thumbnail" 
                layout="fill"
                objectFit="cover"
                loading="lazy"
                className="rounded-md"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="play-button w-16 h-16 rounded-full bg-orange/80 flex items-center justify-center">
                  <div className="w-0 h-0 ml-2 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent"></div>
                </div>
              </div>
            </div>
          )}
          
          {(hasInteracted || !thumbnailUrl) && (
            <ReactPlayer
              url={url}
              width={`${width}%`}
              height={`${height}%`}
              controls
              playing={isPlaying}
              playsinline
              config={{
                file: {
                  attributes: {
                    preload: "auto",
                    controlsList: "nodownload"
                  }
                }
              }}
              onReady={() => console.log("Video ready to play")}
              onError={(e) => console.error("Video error:", e)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default VideoCommon;
