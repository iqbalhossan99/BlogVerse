import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Account.module.css";

const Account = () => {
  return (
    <div className={styles.account}>
      {/* <>
          <span
            style={{ color: "#0A8BFE" }}
            className="material-icons-outlined"
            title="Account"
          >
            account_circle
          </span>
          <span style={{ color: "#0A8BFE" }}>Name</span>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <span className="material-icons-outlined" title="Logout">
              logout
            </span>
            Log Out
          </p>
        </> */}
      <>
        <Link to="/signup">Signup</Link>/<Link to="/login">Login</Link>
      </>
    </div>
  );
};

export default Account;
