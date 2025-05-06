import React from "react";
import { Outlet } from "react-router-dom";
import Erroe404 from "./404/Erroe404";

const Resources = () => {
  return (
    <div className="resources-page">
      {/* <h1>Resources</h1> */}
      {/* Optional: Navigation links inside Resources */}
      {/* <Link to="heat-calculator">Heat Calculator</Link> */}

      {/* Where nested content will render */}
      {/* <Erroe404/> */}
      <Outlet />
    </div>
  );
};

export default Resources;
