import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./mainStyles.css";
import logo from "../Pictures/Glen-Allen-HS_logo.png";
import Navbar from "./Navbar";

const Main = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Main;
