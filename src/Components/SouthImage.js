import React, { useEffect, useRef, useState } from "react";
import South from "../Pictures/South.png";
import classes from "../PictureStyles.module.css";
import Navbar from "./Navbar";
import SouthNames from "./lists/WestNames";

const SouthImage = () => {
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
                ? South
                : imageNumber == 3
                ? require(`../Pictures/SouthNames/IMG_1294.png`)
                : imageNumber == 61
                ? require(`../Pictures/SouthNames/IMG_1352.png`)
                : require(`../Pictures/SouthNames/IMG_${
                    1290 + imageNumber
                  }.png`)
            }
            alt=""
            ref={imageRef}
          />
        </div>
        <div className={classes.nameListContainer}>
          {SouthNames.map((element, index) => (
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

export default SouthImage;
