import React from "react";
import Styles from "../styles/Button.module.css";

const Button = ({ className, children, ...rest }) => {
  return (
    <button className={`${Styles.button} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
