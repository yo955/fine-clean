"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ReactPlayer = dynamic(() => import("react-player"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-md">
      <div className="loading-animation">
        <div className="spinner"></div>
      </div>
    </div>
  )
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setHasInteracted(true);
  };

  return (
    <div className="relative w-full h-full">
      <style jsx global>{`
        .loading-animation {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          border-top-color: #333;
          animation: spin 1s ease-in-out infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

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
                priority={false}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="play-button w-16 h-16 rounded-full bg-black/60 flex items-center justify-center">
                  <div className="w-0 h-0 ml-2 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent"></div>
                </div>
              </div>
            </div>
          )}
          
          {(hasInteracted || !thumbnailUrl) && (
            <div className="video-player-container">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="loading-animation">
                    <div className="spinner"></div>
                  </div>
                </div>
              )}
              
              <ReactPlayer
                url={url}
                width={`${width}%`}
                height={`${height}%`}
                controls
                playing={isPlaying}
                playsinline
                onReady={() => setIsLoading(false)}
                onBuffer={() => setIsLoading(true)}
                onBufferEnd={() => setIsLoading(false)}
                config={{
                  file: {
                    attributes: {
                      preload: "metadata",
                      controlsList: "nodownload"
                    }
                  }
                }}
                onError={(e) => console.error("Video error:", e)}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default VideoCommon;
