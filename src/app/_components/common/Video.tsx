"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
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

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <ReactPlayer
          url={url}
          width={`${width}%`}
          height={`${height}%`}
          controls
        />
      )}
    </>
  );
};

export default VideoCommon;
