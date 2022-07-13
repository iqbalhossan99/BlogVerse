import React from "react";
import noAvatar from "../assets/images/noAvatar.png";
import { format } from "timeago.js";
import styles from "../styles/UserAvatar.module.css";

const UserAvatar = ({ username, userPhoto, createdAt }) => {
  const postUploadedTime = format(createdAt);

  return (
    <div className={styles.avatar}>
      <div className={styles.avatarLeft}>
        <img
          className={styles.postProfileImg}
          src={userPhoto ? userPhoto : noAvatar}
          alt="avatar"
        />
        <span className={styles.postUsername}>{username}</span>
        <span className={styles.postDate}>{postUploadedTime}</span>
      </div>
      <div className="avatarRight">
        <span className={`material-icons-outlined ${styles.viewIcon}`}>
          more_horiz
        </span>
      </div>
    </div>
  );
};

export default UserAvatar;
