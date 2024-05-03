import React from "react";
import SE from "../Pictures/SE.png";
import classes from "../PictureStyles.module.css";
const SEImage = () => {
  return (
    <div className={classes.imageContainer}>
      <img className={classes.image} id={classes.image6} src={SE} alt="" />
    </div>
  );
};

export default SEImage;
