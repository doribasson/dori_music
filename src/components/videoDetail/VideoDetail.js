import React from "react";
import AddFavorite from "../addFavorite/AddFavorite";
import "./videoDetail.css";

export default ({ video }) => {
  if (!video)
    return (
      // <div className="title anim-typewriter">
      //   What do you want to listen today?
      // </div>
      <div className="listen-title">What do you want to listen today?</div>
    );

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?vq=hd720p60`;

  return (
    <div className="videoDetail">
      <div className="Myiframe">
        <iframe
          frameBorder="0"
          Height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
          allowFullScreen
          // srcDoc="<iframe Hello world!/>"
        />
      </div>
      <div className="Details-iframe">
        <span className="channelTitle">{video.snippet.title}</span>
        <span className="favorite-icon">
          <AddFavorite videoId={video.id.videoId} />
        </span>
        {/* <span className="channelTitle"> {video.snippet.channelTitle}</span>
        <span className="description"> {video.snippet.description}</span> */}
      </div>
    </div>
  );
};
