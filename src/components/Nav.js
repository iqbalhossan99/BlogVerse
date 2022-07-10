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
            <em>BVerse</em>
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
