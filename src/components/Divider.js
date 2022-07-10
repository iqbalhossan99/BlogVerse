import React from "react";
import styles from "../styles/Divider.module.css";

const Divider = () => {
  return (
    <div className={styles.dividerContainer}>
      <div className={styles.dividerLine}></div>
      <span className={styles.or}>or</span>
      <div className={styles.dividerLine}></div>
    </div>
  );
};

export default Divider;
