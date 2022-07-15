import React from "react";
import noAvatar from "../assets/images/noAvatar.png";
import { format } from "timeago.js";
import styles from "../styles/UserAvatar.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import useSinglePost from "../hooks/useSinglePost";

const UserAvatar = ({
  postId,
  username,
  userPhoto,
  createdAt,
  userPost,
  handleDeleteBtn,
}) => {
  const postUploadedTime = format(createdAt);
  const { post } = useSinglePost();

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
        {userPost && (
          <>
            <Link to={`/post/${postId}`}>
              <span
                // onClick={handleDeleteBtn}
                className={`material-icons-outlined marginRight-10 ${styles.viewIcon}`}
              >
                edit
              </span>
            </Link>
            <span
              onClick={handleDeleteBtn}
              className={`material-icons-outlined marginRight-10 ${styles.viewIcon}`}
            >
              delete
            </span>
          </>
        )}
        <span className={`material-icons-outlined ${styles.viewIcon}`}>
          more_horiz
        </span>
      </div>
    </div>
  );
};

export default UserAvatar;
