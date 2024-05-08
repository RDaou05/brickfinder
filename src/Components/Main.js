import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./mainStyles.css";
import logo from "../Pictures/Glen-Allen-HS_logo.png";
import Navbar from "./Navbar";
import "./pMainStyles.css";

const Main = () => {
  let navigate = useNavigate();
  return (
    <div className={classes.mainScreen} style={{}}>
      <Navbar />
      <div
        className={classes.mainScreenContentContainer}
        style={{ marginTop: "26vh" }}
      >
        <p className="mainP" style={{ color: "#f5b24c", fontSize: "5vw" }}>
          Brickfinder
        </p>
        <p className="mainP" style={{ color: "white", fontSize: "5vw" }}>
          Glen Allen High School
        </p>
      </div>
    </div>
  );
};

export default Main;
