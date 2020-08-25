import React, { Fragment } from "react";
import { createBrowserHistory } from "history";
import { Home, Favorite, AboutUs, NavBar } from "./components";
import { Router, Route } from "react-router-dom";
// import NavBar from "./components/navBar/NavBar";
// import Favorite from "./components/favorite/Favorite";
// import AboutUs from "./components/aboutUs/AboutUs";
// import Home from "./components/home/Home";

import "./app.css";

const App = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Fragment>
        <div className="mainContainer">
          <NavBar />
          {/* <Switch> */}
          <div className="second-container">
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/favorite" component={Favorite} />
            <Route exact={true} path="/aboutus" component={AboutUs} />
          </div>
          {/* </Switch> */}
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
