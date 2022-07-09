import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import noAvatar from "../assets/images/noAvatar.png";
import { format } from "timeago.js";
import styles from "../styles/UserAvatar.module.css";
import swal from "sweetalert";

const UserAvatar = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return;
  }
  if (error) {
    swal({
      title: `${error}`,
      icon: "error",
    });
  }
  const userAvatar = user?.photoURL;
  const uploadedTime = format(user?.metadata.createdAt);
  const username = user?.displayName;
  return (
    <div className={styles.avatar}>
      <div className={styles.avatarLeft}>
        <img
          className={styles.postProfileImg}
          src={userAvatar ? userAvatar : noAvatar}
          alt="avatar"
        />
        <span className={styles.postUsername}>{username}</span>
        <span className={styles.postDate}>{uploadedTime}</span>
      </div>
      <div className="avatarRight">
        <span class="material-icons-outlined">more_horiz</span>
      </div>
    </div>
  );
};

export default UserAvatar;
