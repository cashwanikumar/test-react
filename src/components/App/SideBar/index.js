import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { AiOutlineFolder } from "react-icons/ai";
import { RiBarChart2Line, RiStickyNoteLine } from "react-icons/ri";

import "./index.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidenav">
        <div className="top-logo">
          <span>C</span>
        </div>
        <div className="menu-container">
          <div className="menu">
            <span>
              <AiOutlineFolder />
            </span>
          </div>
          <div className="menu">
            <span className="active">
              <RiBarChart2Line />
            </span>
          </div>
          <div className="menu">
            <span>
              <FaRegEnvelope />
            </span>
          </div>
          <div className="menu">
            <span>
              <RiStickyNoteLine />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

// style={{
//   position: "absolute",
//   left: "8.33%",
//   right: "8.33%",
//   top: "16.67%",
//   bottom: "16.67%",
//   background: "rgba(150, 156, 186, 0.2)",
//   border: "2px solid #969CBA",
// }}
