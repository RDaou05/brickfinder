import React from "react";
import classes from "./mainStyles.css";
import logo from "../Pictures/Glen-Allen-HS_logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <div
      className="navbar"
      // style={{ background: "black", width: "100%", height: "100%" }}
    >
      <img
        src={logo}
        alt=""
        className="logo"
        onClick={() => {
          navigate("/", { replace: false });
        }}
      />
      <button
        onClick={() => {
          navigate("/NI", { replace: false });
        }}
      >
        North Quadrant
      </button>
      <button
        onClick={() => {
          navigate("/SI", { replace: false });
        }}
      >
        South Quadrant
      </button>
      <button
        onClick={() => {
          navigate("/EI", { replace: false });
        }}
      >
        East Quadrant
      </button>
      <button
        onClick={() => {
          navigate("/WI", { replace: false });
        }}
      >
        West Quadrant
      </button>
      <button
        onClick={() => {
          navigate("/NEI", { replace: false });
        }}
      >
        North East Quadrant
      </button>
      {/* <button
        onClick={() => {
          navigate("/SEI", { replace: false });
        }}
      >
        South East Quadrant
      </button> */}
      {/* <button
        onClick={() => {
          navigate("/SWI", { replace: false });
        }}
      >
        South West Quadrant
      </button> */}
    </div>
  );
};

export default Navbar;
