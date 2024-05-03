import React, { useEffect, useRef, useState } from "react";
import North from "../Pictures/North.png";
import classes from "../PictureStyles.module.css";

const NorthImage = () => {
  const nameBoxContainerRef = useRef();
  const imageRef = useRef();
  // const [tenP, setTenP] = useState();

  const resizeOverLayer = () => {
    setTimeout(() => {
      let width = imageRef.current.offsetWidth;
      let height = imageRef.current.offsetHeight;
      nameBoxContainerRef.current.style.width = width + "px";
      nameBoxContainerRef.current.style.height = height + "px";
      // setTenP(imageRef.current.offsetWidth * 0.01);
    }, 300);
  };

  window.addEventListener("resize", resizeOverLayer);

  useEffect(() => {
    // Get the width of element1
    setTimeout(() => {
      let width = imageRef.current.offsetWidth;
      let height = imageRef.current.offsetHeight;
      // // Set the width of element2 to be the same as element1
      nameBoxContainerRef.current.style.width = width + "px";
      nameBoxContainerRef.current.style.height = height + "px";
      // setTenP(imageRef.current.offsetWidth * 0.01);
    }, 300);
    window.addEventListener("resize", resizeOverLayer);
    return () => {
      window.removeEventListener("resize", resizeOverLayer);
    };
  }, []);

  return (
    <div className={classes.imageContainer}>
      <div className={classes.nameBoxContainer} ref={nameBoxContainerRef}>
        <div className={classes.box}></div>
        {Array.from({ length: 1039 }, (_, i) => (
          <div className={classes.box} key={i}></div>
        ))}
      </div>
      <img
        className={classes.image}
        id={classes.image1}
        src={North}
        alt=""
        ref={imageRef}
      />
    </div>
  );
};

export default NorthImage;
