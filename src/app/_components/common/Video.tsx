"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
interface VideoProps {
  width: number;
  height: number;
}
const VideoCommon: React.FC<VideoProps> = ({ width = 100, height = 100 }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <ReactPlayer
          url="https://youtu.be/-Wi8YgylkUk"
          width={`${width}%`}
          height={`${height}%`}
          controls
        />
      )}
    </>
  );
};

export default VideoCommon;
