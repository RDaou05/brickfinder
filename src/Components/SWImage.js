import React, { useRef } from "react";
import SW from "../Pictures/SW.png";
import classes from "../PictureStyles.module.css";
import Navbar from "./Navbar";

const SWImage = () => {
  const imageRef = useRef();
  return (
    <div className={classes.screenDiv}>
      <Navbar />
      <div className={classes.mainContainer}>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            id={classes.image1}
            src={SW}
            alt=""
            ref={imageRef}
          />
        </div>
        <div className={classes.nameListContainer}></div>
      </div>
    </div>
  );
};

export default SWImage;
