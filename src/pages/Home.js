import React from "react";
import Posts from "../components/Posts";
import LeftSidebar from "../components/LeftSidebar";
import styles from "../styles/Home.module.css";
import RightSidebar from "../components/RightSidebar";

const Home = () => {
  return (
    <div className={styles.home}>
      <LeftSidebar />
      <Posts />
      <RightSidebar />
    </div>
  );
};

export default Home;
