import React from "react";
import "./videoList.css";

import VideoItem from "../videoItem/VideoItem";

export default ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map(
    (video, i) =>
      i > 0 && (
        <VideoItem
          onVideoSelect={onVideoSelect}
          key={video.id.videoId}
          video={video}
        />
      )
  );

  return (
    // <div container spacing={10} style={{ display: "flex", flexWrap: "wrap" }}>
    <div className="container-list">{listOfVideos}</div>
  );
};
