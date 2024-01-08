import React from "react";

const VideoComponent = () => {
  return (
    <div className="rounded-2xl w-full">
      <video className="w-full" controls autoPlay>
        <source
          src="https://spc-space.ams3.cdn.digitaloceanspaces.com/ADIS%202024%20Short%20Video(1).mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
