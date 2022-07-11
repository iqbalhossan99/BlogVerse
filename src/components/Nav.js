import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Nav.module.css";
import Account from "./Account";
import InputText from "./InputText";
import usePosts from "../hooks/usePosts";
import Button from "./Button";

const Nav = () => {
  const [searchResult, setSearchResult] = useState("");
  const { posts } = usePosts();
  const navigate = useNavigate();
  // console.log(searchResult, posts);
  const handleSearch = (searchResult) => {
    navigate("/searchPosts");
    // console.log(searchResult);
  };

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
        onChange={(e) => setSearchResult(e.target.value)}
        type="text"
        placeholder="Search"
        name="search"
        icon="search"
        handleSearch={() => handleSearch(searchResult)}
      />
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
