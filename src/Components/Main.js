import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  let navigate = useNavigate();
  return (
    <div>
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
      <button
        onClick={() => {
          navigate("/SEI", { replace: false });
        }}
      >
        South East Quadrant
      </button>
      <button
        onClick={() => {
          navigate("/SWI", { replace: false });
        }}
      >
        South West Quadrant
      </button>
    </div>
  );
};

export default Main;
