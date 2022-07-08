import React from "react";
import styles from "../styles/InputText.module.css";

const InputText = ({ icon, ...rest }) => {
  return (
    <div className={styles.inputText}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
};

export default InputText;
