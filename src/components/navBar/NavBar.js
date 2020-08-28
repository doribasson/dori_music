import React from "react";
import "./navBar.css";
import { NavLink, Link } from "react-router-dom";
import MyDialog from "../myDialog/MyDialog";

const NavBar = () => {
  return (
    <div className="sideNav">
      <div className="mylogo">
        <Link
          to="/"
          className="logo"
          src={require("../../assets/logo-music.png")}
          alt="logo"
        ></Link>
      </div>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="navbar-brand"
            activeClassName="main-nav-active"
            activeStyle={{
              color: "white"
            }}
          >
            <span>HOME</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/aboutus"
            className="navbar-brand"
            activeClassName="main-nav-active"
            activeStyle={{
              color: "white"
            }}
          >
            <span>ABOUT US</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/favorite"
            className="navbar-brand"
            activeClassName="main-nav-active"
            activeStyle={{
              color: "white"
            }}
          >
            <span>MY FAVORITE</span>
          </NavLink>
        </li>
        <li>
          <span>
            <MyDialog />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
