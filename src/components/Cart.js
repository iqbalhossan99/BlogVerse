import React from "react";
import styles from "../styles/Cart.module.css";

const Cart = ({ img, text }) => {
  return (
    <div className={styles.cart}>
      <img className={styles.cartImg} src={img} alt="" />
      <h2 className={styles.cartText}>{text}</h2>
    </div>
  );
};

export default Cart;
