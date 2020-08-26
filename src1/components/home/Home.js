import youtube from "../../api/youtube";
import SearchBar from "../searchBar/SearchBar";
import VideoList from "../videoList/VideoList";
import VideoDetail from "../videoDetail/VideoDetail";
import "./home.css";

import React, { useState } from "react";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="contentSideView">
      <SearchBar onSubmit={handleSubmit} />
      <section className="video">
        <VideoDetail video={selectedVideo} />
        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
      </section>
    </div>
  );
  async function handleSubmit(searchTerm) {
    const {
      data: { items: videos }
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: "AIzaSyAdyUHlXrQtXHfqmTDwPNqE8WnfXSvr0RU",
        q: searchTerm
      }
    });

    //"AIzaSyAdyUHlXrQtXHfqmTDwPNqE8WnfXSvr0RU
    // key: "AIzaSyBz2KSSRvBDJhb9qRjQiW1yfmqgu14zMgw",
    // key: "AIzaSyDnwIIP61_Jbwmd8_N31EFk-M_To9c5mjM",
    // key: "AIzaSyAdyUHlXrQtXHfqmTDwPNqE8WnfXSvr0RU",
    //AIzaSyCDIsZfWCLi17s0q_PjjRIzvlkxPLdLcV8
    //"AIzaSyCEvjsdoJcVTocWKDbOgT2IF4hkbTn-a0c"

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
};

export default Home;
