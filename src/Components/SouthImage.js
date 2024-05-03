import React from "react";
import South from "../Pictures/South.png";
import classes from "../PictureStyles.module.css";
const SouthImage = () => {
  return (
    <div className={classes.imageContainer}>
      <img className={classes.image} id={classes.image2} src={South} alt="" />
    </div>
  );
};

export default SouthImage;
