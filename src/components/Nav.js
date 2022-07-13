import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";
import Account from "./Account";
import InputText from "./InputText";
import Button from "./Button";
import { useSearch } from "../contexts/SearchContext";

const Nav = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { search } = useSearch();

  const handleSearch = () => {
    search(searchTerm);
    setSearchTerm("");
  };

  console.log(searchTerm);

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
      <InputText
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        type="text"
        placeholder="Search"
        name="search"
        icon="search"
        handleSearch={handleSearch}
      />

      {/* left nav */}
      <div className={styles.leftNav}>
        <Link to="/createPost">
          <Button>
            <span>Create Post</span>
          </Button>
        </Link>
        {/* ACCOUNT */}
        <Account />
      </div>
    </nav>
  );
};

export default Nav;
