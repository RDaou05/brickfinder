import React, { useEffect, useRef, useState } from "react";
import NE from "../Pictures/NE.png";
import classes from "../PictureStyles.module.css";
import Navbar from "./Navbar";
import NENames from "./lists/NENames";

const NEImage = () => {
  const nameBoxContainerRef = useRef();
  const [imageNumber, setImageNumber] = useState(-1);
  const imageRef = useRef();

  setInterval(() => {
    try {
      if (imageRef.current.offsetWidth > 50) {
        nameBoxContainerRef.current.style.width =
          imageRef.current.offsetWidth + "px";
      }
    } catch (err) {}
  }, 100);

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
                ? NE
                : imageNumber == 23
                ? require(`../Pictures/NENames/IMG_1455.png`)
                : require(`../Pictures/NENames/IMG_${1430 + imageNumber}.png`)
            }
            alt=""
            ref={imageRef}
          />
        </div>
        <div className={classes.nameListContainer} ref={nameBoxContainerRef}>
          {NENames.map((element, index) => (
            <p
              key={index}
              className={classes.nameTag}
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

export default NEImage;
