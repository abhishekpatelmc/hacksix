import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import { Typography } from "@mui/material/Typography";

import "./SideNavBar.css";
import { IconContext } from "react-icons";

function SideNavBar({ chapterOptions }) {
  var i = 0;
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="nav-menu active">
          <ul className="nav-menu-items">
            {chapterOptions.map((item, index) => {
              i++;
              return (
                <li key={index} className="nav-text">
                  <Link to={item.pathValue}>
                    <span>
                      {i}. {item.chapterName}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideNavBar;
