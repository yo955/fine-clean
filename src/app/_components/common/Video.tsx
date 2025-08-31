"use client";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoCommon: React.FC = () => {


  return (
    <>
      (
      <ReactPlayer
        url="/videos/fine-video.mp4"
        controls
        aria-label="Video content"
        title="Video player"
        width="100%"
        height="100%"
      />
      )
    </>
  );
};

export default VideoCommon;
