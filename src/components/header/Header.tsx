import React from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Where in the world?</h1>
      <button className="theme__switcher">
        <LightModeOutlinedIcon />
        <span>Light Mode</span>
      </button>
    </header>
  );
};

export default Header;
