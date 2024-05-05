import React, { useEffect, useRef, useState } from "react";
import North from "../Pictures/North.png";
import classes from "../PictureStyles.module.css";

const NorthImage = () => {
  const nameBoxContainerRef = useRef();
  const imageRef = useRef();
  const [dimChanged, setDimChanged] = useState(0);
  const [boxWidth, setBoxWidth] = useState("0px");
  const [boxHeight, setBoxHeight] = useState("0px");
  // const [tenP, setTenP] = useState();

  const resizeOverLayer = () => {
    setTimeout(() => {
      let width = imageRef.current.offsetWidth;
      let height = imageRef.current.offsetHeight;
      nameBoxContainerRef.current.style.width = width + "px";
      nameBoxContainerRef.current.style.height = height + "px";
      setDimChanged(dimChanged + 1);
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
      setDimChanged(dimChanged + 1);
      // setTenP(imageRef.current.offsetWidth * 0.01);
    }, 300);
    window.addEventListener("resize", resizeOverLayer);
    return () => {
      window.removeEventListener("resize", resizeOverLayer);
    };
  }, []);

  useEffect(() => {
    let width = nameBoxContainerRef.current.offsetWidth;
    let height = nameBoxContainerRef.current.offsetHeight;
    let newWidth = width * 0.02;
    let newHeight = height * 0.05;
    setBoxWidth(newWidth + "px");
    setBoxHeight(newHeight + "px");
  }, [dimChanged]);

  return (
    <div className={classes.imageContainer}>
      <div className={classes.nameBoxContainer} ref={nameBoxContainerRef}>
        {Array.from({ length: 600 }, (_, i) => (
          <div
            className={classes.box}
            key={i}
            style={{ width: boxWidth, height: boxHeight }}
          ></div>
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
