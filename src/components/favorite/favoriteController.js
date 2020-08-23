export const addVideoToStorage = video_id => {
  console.log("in addVideoToStorage");
  let addVideo = video_id;
  if (localStorage.getItem("videoInfo") === null) {
    let storedVideo = [];
    if (addVideo !== null) {
      storedVideo.push(addVideo);
      localStorage.setItem("videoInfo", JSON.stringify(storedVideo));
    }
  } else {
    let storedVideo = JSON.parse(localStorage.getItem("videoInfo"));
    const result = storedVideo.some(video => video === addVideo);
    if (!result) storedVideo.push(addVideo);
    localStorage.setItem("videoInfo", JSON.stringify(storedVideo));
  }
};

export const delteVideoFromFavorite = deleteVideoIndex => {
  let storedVideo = JSON.parse(localStorage.getItem("videoInfo"));
  storedVideo.splice(deleteVideoIndex, 1);
  localStorage.setItem("videoInfo", JSON.stringify(storedVideo));
};

export const delteVideoFromFavoriteWithId = videoId => {
  let storedVideo = JSON.parse(localStorage.getItem("videoInfo"));

  if (storedVideo) {
    storedVideo = storedVideo.filter(video => video !== videoId);
    localStorage.setItem("videoInfo", JSON.stringify(storedVideo));
  }
};
