import React, { useEffect, useRef, useState } from "react";
import North from "../Pictures/North.png";
import classes from "../PictureStyles.module.css";
import Navbar from "./Navbar";
import northNames from "./lists/NorthNames";

const NorthImage = () => {
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
                ? North
                : imageNumber == 74
                ? require(`../Pictures/NorthNames/IMG_1215.png`)
                : require(`../Pictures/NorthNames/IMG_${
                    1140 + imageNumber
                  }.png`)
            }
            alt=""
            ref={imageRef}
          />
        </div>
        <div className={classes.nameListContainer} ref={nameBoxContainerRef}>
          {northNames.map((element, index) => (
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

export default NorthImage;
