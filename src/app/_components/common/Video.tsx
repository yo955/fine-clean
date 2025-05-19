"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

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
}

const VideoCommon: React.FC<VideoProps> = ({
  width = 100,
  height = 100,
  url = "/videos/video-1.mp4",
}) => {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
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
        .video-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
      `}</style>

      {isClient && (
        <div className="video-wrapper">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
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
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </div>
      )}
    </div>
  );
};

export default VideoCommon;
