import React, { useState } from "react";
import "./addFavorite.css";

const AddFavorite = ({ videoId }) => {
  const [favorite, setFavorite] = useState(false);
  let checkFavorite = JSON.parse(localStorage.getItem("videoInfo")) || [];

  const MyLocalStorage = () => {
    let deleteVideo = videoId;
    let storeVideo = JSON.parse(localStorage.getItem("videoInfo")) || [];
    if (localStorage.length !== 0) {
      const result = storeVideo.some(video => video === deleteVideo);
      if (result) {
        delteVideoFromFavorite(deleteVideo);
        setFavorite(!favorite);
      } else {
        addVideoToStorage();
        setFavorite(!favorite);
      }
    } else {
      addVideoToStorage();
      setFavorite(!favorite);
    }
  };

  const addVideoToStorage = () => {
    let addVideo = videoId;
    if (localStorage.getItem("videoInfo") === null) {
      let storeVideo = [];
      storeVideo.push(addVideo);
      localStorage.setItem("videoInfo", JSON.stringify(storeVideo));
      setFavorite(true);
    } else {
      let storeVideo = JSON.parse(localStorage.getItem("videoInfo"));
      const result = storeVideo.some(video => video === addVideo);
      if (!result) storeVideo.push(addVideo);
      localStorage.setItem("videoInfo", JSON.stringify(storeVideo));
      setFavorite(true);
    }
  };

  const delteVideoFromFavorite = deleteVideo => {
    let storeVideo = JSON.parse(localStorage.getItem("videoInfo"));

    const NewStoreVideo = storeVideo.filter(video => video !== deleteVideo);
    localStorage.setItem("videoInfo", JSON.stringify(NewStoreVideo));
    setFavorite(false);
    if (NewStoreVideo.length === 0) localStorage.clear();
  };

  let doubled = checkFavorite.some(video => video === videoId);
  return doubled ? (
    <div className="Favorite-pos">
      <i onClick={MyLocalStorage} className="fas fa-heart fa-2x item"></i>
    </div>
  ) : (
    <div className="Favorite-pos">
      <i onClick={MyLocalStorage} className="far fa-heart fa-2x item"></i>
    </div>
  );
};

export default AddFavorite;
