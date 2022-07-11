import React from "react";
import styles from "../styles/InputText.module.css";

const InputText = ({ icon, className, handleSearch, ...rest }) => {
  return (
    <div className={`${styles.inputText} ${className} `}>
      <input {...rest} />
      <span onClick={handleSearch} className="material-icons-outlined">
        {icon}
      </span>
    </div>
  );
};

export default InputText;
