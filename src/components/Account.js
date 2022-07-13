import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import auth from "../firebase.init";
import styles from "../styles/Account.module.css";
import Button from "./Button";

const Account = () => {
  const [user, loading, error] = useAuthState(auth);
  const { logOut } = useAuth();
  return (
    <div className={styles.account}>
      {user ? (
        <>
          <Link to="/createPost" className={styles.createBtn}>
            <Button>
              <span>Create Post</span>
            </Button>
          </Link>
          <span
            style={{ color: "#0A8BFE" }}
            className="material-icons-outlined"
            title="Account"
          >
            account_circle
          </span>

          <span style={{ color: "#0A8BFE" }}>{user?.displayName}</span>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={logOut}
          >
            <span className="material-icons-outlined" title="Logout">
              logout
            </span>
            Log Out
          </p>
        </>
      ) : (
        <>
          <Link className={styles.accountLink} to="/signUp">
            Signup
          </Link>
          /
          <Link className={styles.accountLink} to="/login">
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default Account;
