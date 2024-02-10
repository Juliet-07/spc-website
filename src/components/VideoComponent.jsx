import React from "react";

const VideoComponent = () => {
  return (
    <div className="rounded-2xl w-full">
      <video className="w-full" controls autoPlay>
        <source
          src="https://spcimagestorage001.blob.core.windows.net/spc-events-image/ADIS 2024 Short Video(1).mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
