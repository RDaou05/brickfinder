import React, { useRef } from "react";
import SE from "../Pictures/SE.png";
import classes from "../PictureStyles.module.css";
import Navbar from "./Navbar";

const SEImage = () => {
  const imageRef = useRef();
  const nameBoxContainerRef = useRef();

  setInterval(() => {
    if (imageRef.current.offsetWidth > 50) {
      nameBoxContainerRef.current.style.width =
        imageRef.current.offsetWidth + "px";
    }
  }, 100);
  return (
    <div className={classes.screenDiv}>
      <Navbar />
      <div className={classes.mainContainer}>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            id={classes.image1}
            src={SE}
            alt=""
            ref={imageRef}
          />
        </div>
        <div
          className={classes.nameListContainer}
          ref={nameBoxContainerRef}
        ></div>
      </div>
    </div>
  );
};

export default SEImage;
