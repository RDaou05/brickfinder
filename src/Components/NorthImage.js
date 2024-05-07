import React, { useEffect, useRef, useState } from "react";
import North from "../Pictures/North.png";
import classes from "../PictureStyles.module.css";
import Navbar from "./Navbar";

const NorthImage = () => {
  const nameBoxContainerRef = useRef();
  const imageRef = useRef();

  return (
    <div className={classes.screenDiv}>
      <Navbar />
      <div className={classes.mainContainer}>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            id={classes.image1}
            src={North}
            alt=""
            ref={imageRef}
          />
        </div>
        <div className={classes.nameListContainer}></div>
      </div>
    </div>
  );
};

export default NorthImage;
