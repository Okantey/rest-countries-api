import React from "react";
import "./PreLoader.css";

const PreLoader = () => {
  return (
    <div class="spinnerContainer">
      <div class="spinner"></div>
      <div class="loader">
        <p>loading</p>
        <div class="words">
          <span class="word">countries</span>
          <span class="word">images</span>
          <span class="word">details</span>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
