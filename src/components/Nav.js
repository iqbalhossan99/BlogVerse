import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";
import Account from "./Account";
import InputText from "./InputText";
import Button from "./Button";
import { SidebarData } from "./sidebarData";

import { useSearch } from "../contexts/SearchContext";

const Nav = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { search } = useSearch();

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const handleSearch = () => {
    search(searchTerm);
    setSearchTerm("");
  };

  return (
    <>
      <nav className={styles.nav}>
        {/* hamburger menu icon */}
        <div className={styles.navbar}>
          <Link to="#" onClick={showSidebar} className={styles.menuBars}>
            {sidebar === false ? (
              <span className="material-icons-outlined">menu</span>
            ) : (
              <span className="material-icons-outlined">close</span>
            )}
          </Link>
          <ul>
            <li>
              <Link to="/" className={styles.brand}>
                <em>BVerse</em>
              </Link>
            </li>
          </ul>
        </div>
        {/* SEARCH INPUT */}
        <InputText
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          type="text"
          placeholder="Search"
          name="search"
          icon="search"
          handleSearch={handleSearch}
          className={styles.resInput}
        />

        {/* left nav */}
        <div className={styles.leftNav}>
          {/* ACCOUNT */}
          <Account />
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav
        className={
          sidebar ? `${styles.navMenu} ${styles.active}` : `${styles.navMenu}`
        }
      >
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
    </>
  );
};

export default Nav;
