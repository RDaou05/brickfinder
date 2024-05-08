import React, { useEffect, useRef, useState } from "react";
import West from "../Pictures/West.png";
import classes from "../PictureStyles.module.css";
import Navbar from "./Navbar";
import WestNames from "./lists/WestNames";

const WestImage = () => {
  const nameBoxContainerRef = useRef();
  const [imageNumber, setImageNumber] = useState(-1);
  const imageRef = useRef();

  return (
    <div className={classes.screenDiv}>
      <Navbar />
      <div className={classes.mainContainer}>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            id={classes.image1}
            src={
              imageNumber == -1
                ? West
                : require(`../Pictures/WestNames/IMG_${1227 + imageNumber}.png`)
            }
            alt=""
            ref={imageRef}
          />
        </div>
        <div className={classes.nameListContainer}>
          {WestNames.map((element, index) => (
            <p
              key={index}
              onClick={() => {
                setImageNumber(index);
              }}
            >
              {element}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WestImage;
