import React from "react";
import SW from "../Pictures/SW.png";
import classes from "../PictureStyles.module.css";
const SWImage = () => {
  return (
    <div className={classes.imageContainer}>
      <img className={classes.image} id={classes.image7} src={SW} alt="" />
    </div>
  );
};

export default SWImage;
