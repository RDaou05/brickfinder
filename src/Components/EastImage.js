import React from "react";
import East from "../Pictures/East.png";
import classes from "../PictureStyles.module.css";
const EastImage = () => {
  return (
    <div className={classes.imageContainer}>
      <img className={classes.image} id={classes.image3} src={East} alt="" />
    </div>
  );
};

export default EastImage;
