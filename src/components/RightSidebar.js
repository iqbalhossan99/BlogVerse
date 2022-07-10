import React from "react";
import styles from "../styles/RightSidebar.module.css";
import Cart from "./Cart";
import AndroidApp from "../assets/images/android_app.jpg";
import Listings from "./Listings";

const RightSidebar = () => {
  return (
    <>
      <div className={styles.rightbar}>
        <Cart img={AndroidApp} text="Forem Android App is Here" />
        <Listings />
      </div>
    </>
  );
};

export default RightSidebar;
