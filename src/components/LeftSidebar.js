import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LeftSidebar.module.css";
import { SidebarData } from "./sidebarData";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className={styles.leftSidebar}>
        {/* <div className={styles.navbar}>
          <Link to="#" className={styles.menuBars}>
            <span onClick={showSidebar} className="material-icons-outlined">
              menu
            </span>
          </Link>
        </div> */}
        <nav
          className={
            sidebar ? `${styles.navMenu} ${styles.active}` : `${styles.navMenu}`
          }
        >
          <ul className={styles.navMenuItems} onClick={showSidebar}>
            {/* <li className={styles.navbarToggle}>
              <Link to="#" className={styles.menuBars}>
                <span className="material-icons-outlined">close</span>{" "}
              </Link>
            </li> */}
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
