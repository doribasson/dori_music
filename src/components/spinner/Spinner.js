import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import LinearProgress from "@material-ui/core/LinearProgress";
import "./spinner.css";

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "50%",
//     "& > * + *": {
//       marginTop: theme.spacing(2)
//     },
//     marginLeft: theme.spacing(50)
//   }
// }));

export default function Spinner() {
  // const classes = useStyles();

  return (
    // <div className={classes.root}>
    <div className="spinner">
      <div className="loader" id="loader"></div>
      <div className="loader" id="loader2"></div>
      <div className="loader" id="loader3"></div>
      <div className="loader" id="loader4"></div>
      <span id="text">Loading...</span>
      {/* <div className="loading">
        <div className="loading__letter">L</div>
        <div className="loading__letter">o</div>
        <div className="loading__letter">a</div>
        <div className="loading__letter">d</div>
        <div className="loading__letter">i</div>
        <div className="loading__letter">n</div>
        <div className="loading__letter">g</div>
        <div className="loading__letter">.</div>
        <div className="loading__letter">.</div>
        <div className="loading__letter">.</div>
      </div> */}
    </div>
  );
}
