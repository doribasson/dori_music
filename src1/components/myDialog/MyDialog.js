import React from "react";
// import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MuiMenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";
// import { makeStyles } from "@material-ui/core";
// import { height } from "@material-ui/system";
import "./myDialog.css";

const MenuItem = styled(MuiMenuItem)`
  justify-content: center;
`;

// const useStyles = makeStyles({
//   customWidth: {
//     "& div": {
//       // this is just an example, you can use vw, etc.
//       width: "200px",
//       height: "350px",
//       marginLeft: "3.2rem",
//       overflowX: "hidden"
//     }
//   }
// });

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  //   const classes = useStyles();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  let storedVideo = JSON.parse(localStorage.getItem("videoInfo"));
  return (
    <div>
      {/* <img
        src={require("../../assets/music.gif")}
        onClick={handleClick}
        style={{ width: "5rem", backgroundColor: "red" }}
      /> */}
      <i
        onClick={handleClick}
        // style={{ marginLeft: "5rem" }}
        className="fas fa-music fa-1x"
      ></i>
      {/* <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button> */}

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        className="customWidth"
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        // transformOrigin={{ horizontal: "center" }}
      >
        <div className="container-modal-title">
          <span className="title-Favorite">My Favorite</span>
        </div>
        {/* <strong style={{ color: "green" }}>X</strong> */}
        {storedVideo ? (
          storedVideo.map((video, i) => {
            const videoSrc = `https://www.youtube.com/embed/${video}?vq=hd720`;
            return (
              <MenuItem key={i} onClick={handleClose}>
                <iframe
                  key={i}
                  frameBorder="0"
                  height="100%"
                  width="100%"
                  title="Video Player"
                  src={videoSrc}
                  // allowFullScreen="true"
                  allowFullScreen
                />
              </MenuItem>
            );
          })
        ) : (
          <strong className="favorite-title">Nothing in favorite</strong>
        )}
      </Menu>
    </div>
  );
}
