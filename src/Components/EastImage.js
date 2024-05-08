import React, { useEffect, useRef, useState } from "react";
import East from "../Pictures/East.png";
import classes from "../PictureStyles.module.css";
import Navbar from "./Navbar";
import EastNames from "./lists/WestNames";

const EastImage = () => {
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
                ? East
                : require(`../Pictures/EastNames/IMG_${1367 + imageNumber}.png`)
            }
            alt=""
            ref={imageRef}
          />
        </div>
        <div className={classes.nameListContainer}>
          {EastNames.map((element, index) => (
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

export default EastImage;
