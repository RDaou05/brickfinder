import React from "react";
import West from "../Pictures/West.png";
import classes from "../PictureStyles.module.css";
const WestImage = () => {
  return (
    <div className={classes.imageContainer}>
      <img className={classes.image} id={classes.image4} src={West} alt="" />
    </div>
  );
};

export default WestImage;
