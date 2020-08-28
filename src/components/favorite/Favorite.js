import React, { useState, useEffect } from "react";
import "./favorite.css";
import { delteVideoFromFavorite } from "../favorite/favoriteController";
import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import TextFavorite from "../text-animation/TextFavorite";

const Favorite = () => {
  const [myRender, setRender] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const secondFunction = async () => {
      if (storedVideo !== null) {
        console.log(storedVideo);
        await myfetch();
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      } else setLoading(false);
    };
    secondFunction();
  }, [loading]);

  const myfetch = () => {
    let storedVideo = JSON.parse(localStorage.getItem("videoInfo"));

    return (
      <div className="all-favorite-video">
        {storedVideo ? (
          storedVideo.map((video, i) => {
            const videoSrc = `https://www.youtube.com/embed/${video}?vq=hd720`;
            return (
              <div key={i} className="favorite-container">
                <iframe
                  key={i}
                  frameBorder="0"
                  height="100%"
                  width="100%"
                  title="Video Player"
                  src={videoSrc}
                  allowFullScreen
                />
                <i
                  className="fas fa-heart fa-2x favorite"
                  onClick={() => myDelete(i)}
                ></i>
              </div>
            );
          })
        ) : (
          <p className="choose-song-title">
            First, you need to choose a song in the&nbsp;
            <Link to="/">
              {/* <u>home</u>    or u tag with no css */}
              <span>home</span>
            </Link>
            &nbsp;page
          </p>
        )}
      </div>
    );
  };

  let storedVideo = JSON.parse(localStorage.getItem("videoInfo"));

  const myDelete = i => {
    console.log("try");
    console.log(storedVideo.length);
    delteVideoFromFavorite(i);
    setRender(!myRender);
    if (storedVideo.length === 1) {
      localStorage.clear();
      setRender(!myRender);
    }
  };
  return (
    <div className="container-favorite">
      <div className="title-favorite">
        <TextFavorite />
      </div>
      {loading ? (
        <div className="myspinner">
          <Spinner />
        </div>
      ) : (
        myfetch()
      )}
    </div>
  );
};

export default Favorite;
