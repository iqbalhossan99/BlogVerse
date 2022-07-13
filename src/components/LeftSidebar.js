import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LeftSidebar.module.css";
import { SidebarData } from "./sidebarData";

const Sidebar = () => {
  return (
    <>
      <div className={styles.leftSidebar}>
        <nav className={`${styles.navMenu}`}>
          <ul className={styles.navMenuItems}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={styles.navItem}>
                  <Link to={item.path}>
                    <span
                      style={{ width: "24px" }}
                      className="material-icons-outlined"
                    >
                      {item.icon}
                    </span>
                    <span className={styles.navText}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
