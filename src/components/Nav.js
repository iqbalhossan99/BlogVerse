import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";
import Account from "./Account";
import InputText from "./InputText";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/" className={styles.brand}>
            <em>BlogVerse</em>
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/posts" className={styles.navLink}>
            Posts
          </Link>
        </li>
        <li>
          <Link to="/login" className={styles.navLink}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/singUp" className={styles.navLink}>
            Sign Up
          </Link>
        </li>
      </ul>
      {/* SEARCH INPUT */}
      <InputText type="text" placeholder="Search" name="search" icon="search" />
      {/* ACCOUNT */}
      <Account />
    </nav>
  );
};

export default Nav;
