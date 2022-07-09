import React from "react";
import UserAvatar from "./UserAvatar";
import styles from "../styles/Post.module.css";
import LikeComment from "./LikeComment";

const Post = ({ post }) => {
  const { title, desc, img } = post;
  const maxDesc = desc.slice(0, 100);
  return (
    <div className={styles.postContainer}>
      <UserAvatar />
      <div>
        <img className={styles.postImg} src={img} alt="" />
        <h3 className={styles.postTitle}>{title}</h3>
        <p className={styles.postDesc}>{maxDesc}...</p>
      </div>
      <LikeComment />
    </div>
  );
};

export default Post;
