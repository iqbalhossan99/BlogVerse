import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";
import { SidebarData } from "./sidebarData";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="text">
        <div className={styles.navbar}>
          <Link to="#" className={styles.menuBars}>
            <span onClick={showSidebar} class="material-icons-outlined">
              menu
            </span>
          </Link>
        </div>
        <nav
          className={
            sidebar ? `${styles.navMenu} ${styles.active}` : `${styles.navMenu}`
          }
        >
          <ul className={styles.navMenuItems} onClick={showSidebar}>
            <li className={styles.navbarToggle}>
              <Link to="#" className={styles.menuBars}>
                <span class="material-icons-outlined">close</span>{" "}
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={styles.navText}>
                  <Link to={item.path}>
                    <span
                      style={{ width: "24px" }}
                      class="material-icons-outlined"
                    >
                      {item.icon}
                    </span>
                    <span>{item.title}</span>
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
