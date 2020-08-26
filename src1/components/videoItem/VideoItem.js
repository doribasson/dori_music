import React from "react";
// import { Typography } from "@material-ui/core";
import "./videoItem.css";
import AddFavorite from "../addFavorite/AddFavorite";

export default ({ video, onVideoSelect }) => {
  return (
    <div className="item-container">
      <img
        onClick={() => onVideoSelect(video)}
        alt="Oops..."
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="Typography">
        <span>{video.snippet.title}</span>
        <AddFavorite videoId={video.id.videoId} />
      </div>
    </div>
  );
};
