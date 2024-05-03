import React from "react";
import NE from "../Pictures/NE.png";
import classes from "../PictureStyles.module.css";
const NEImage = () => {
  return (
    <div className={classes.imageContainer}>
      <img className={classes.image} id={classes.image5} src={NE} alt="" />
    </div>
  );
};

export default NEImage;
