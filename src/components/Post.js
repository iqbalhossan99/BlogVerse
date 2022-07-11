import React from "react";
import UserAvatar from "./UserAvatar";
import styles from "../styles/Post.module.css";
import LikeComment from "./LikeComment";
import { Link } from "react-router-dom";

const Post = ({ post, singlePost }) => {
  const { _id, title, desc, img } = post;

  return (
    <div className={styles.postContainer}>
      <UserAvatar />
      <Link to={`/posts/${_id}`}>
        <div>
          <img className={styles.postImg} src={img} alt="" />
          <h3 className={styles.postTitle}>{title}</h3>

          <p className={styles.postDesc}>{singlePost && desc}</p>
        </div>
        <LikeComment />
      </Link>
    </div>
  );
};

export default Post;
