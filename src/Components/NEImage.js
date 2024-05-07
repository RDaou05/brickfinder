import React, { useRef } from "react";
import NE from "../Pictures/NE.png";
import classes from "../PictureStyles.module.css";
import Navbar from "./Navbar";

const NEImage = () => {
  const imageRef = useRef();
  return (
    <div className={classes.screenDiv}>
      <Navbar />
      <div className={classes.mainContainer}>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            id={classes.image1}
            src={NE}
            alt=""
            ref={imageRef}
          />
        </div>
        <div className={classes.nameListContainer}></div>
      </div>
    </div>
  );
};

export default NEImage;
