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

  // const resizeOverLayer = () => {
  //   setTimeout(() => {
  //     let width = imageRef.current.offsetWidth;
  //     let height = imageRef.current.offsetHeight;
  //     nameBoxContainerRef.current.style.width = width + "px";
  //     nameBoxContainerRef.current.style.height = height + "px";
  //     setDimChanged(dimChanged + 1);
  //     // setTenP(imageRef.current.offsetWidth * 0.01);
  //   }, 300);
  // };

  // window.addEventListener("resize", resizeOverLayer);

  // useEffect(() => {
  //   // Get the width of element1
  //   setTimeout(() => {
  //     let width = imageRef.current.offsetWidth;
  //     let height = imageRef.current.offsetHeight;
  //     // // Set the width of element2 to be the same as element1
  //     nameBoxContainerRef.current.style.width = width + "px";
  //     nameBoxContainerRef.current.style.height = height + "px";
  //     setDimChanged(dimChanged + 1);
  //     // setTenP(imageRef.current.offsetWidth * 0.01);
  //   }, 300);
  //   window.addEventListener("resize", resizeOverLayer);
  //   return () => {
  //     window.removeEventListener("resize", resizeOverLayer);
  //   };
  // }, []);

  // useEffect(() => {
  //   let width = nameBoxContainerRef.current.offsetWidth;
  //   let height = nameBoxContainerRef.current.offsetHeight;
  //   let newWidth = width * 0.02;
  //   let newHeight = height * 0.05;
  //   setBoxWidth(newWidth + "px");
  //   setBoxHeight(newHeight + "px");
  // }, [dimChanged]);

  // window.onload = function () {
  //   adjustDivSize();
  //   window.addEventListener("resize", adjustDivSize);
  // };

  // function adjustDivSize() {
  //   console.log("sfg");
  //   const targetDiv = nameBoxContainerRef.current;
  //   // Extracting the URL of the background image from the computed style
  //   const style = window.getComputedStyle(targetDiv);
  //   const backgroundImageUrl = style.backgroundImage
  //     .slice(4, -1)
  //     .replace(/["']/g, "");

  //   // Create a new Image object
  //   const img = new Image();
  //   img.onload = function () {
  //     const naturalWidth = img.naturalWidth;
  //     const naturalHeight = img.naturalHeight;
  //     console.log(`Full size: ${naturalWidth} x ${naturalHeight}`);

  //     // Calculate new height based on the aspect ratio and current width of the div
  //     const aspectRatio = naturalWidth / naturalHeight;
  //     const currentWidth = targetDiv.clientWidth; // This will give the current width based on percentage
  //     const newHeight = currentWidth / aspectRatio;

  //     // Adjusting the div's height to maintain the image's aspect ratio
  //     targetDiv.style.height = `${newHeight}px`;
  //     console.log(`Adjusted size: ${currentWidth}px x ${newHeight}px`);
  //   };

  //   // Setting the src will load the image and trigger the onload event
  //   img.src = backgroundImageUrl;
  //   console.log("img.src: ", img.src);
  // }

  // Function to set data at specific X/Y coordinate
  function setData(x, y, data) {
    let cell = document.querySelector(`td[data-row="${x}"][data-col="${y}"]`);
    if (cell) {
      cell.textContent = data;
    } else {
      console.error("Cell does not exist");
    }
  }

  // Function to get data from specific X/Y coordinate
  function getData(x, y) {
    let cell = document.querySelector(`td[data-row="${x}"][data-col="${y}"]`);
    if (cell) {
      return cell.textContent;
    } else {
      console.error("Cell does not exist");
      return null;
    }
  }

  return (
    <div className={classes.mainContainer}>
      <div className={classes.imageContainer} ref={nameBoxContainerRef}>
        <table className={classes.imageTable}>
          {Array.from({ length: 20 }, (_, i) => (
            <tr key="">
              {Array.from({ length: 10 }, (_, i) => (
                <td key={i}>
                  <div className={classes.box} key={i}></div>
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default NorthImage;
