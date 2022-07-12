import React from "react";
import styles from "../styles/TextArea.module.css";

const TextArea = ({ className, ...rest }) => {
  return (
    <>
      <textarea {...rest} className={`${styles.textArea} ${className}`} />
    </>
  );
};

export default TextArea;
