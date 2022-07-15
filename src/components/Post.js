import React from "react";
import UserAvatar from "./UserAvatar";
import styles from "../styles/Post.module.css";
import Like from "./Like";
import { Link } from "react-router-dom";

const Post = ({ post, singlePost, userPost, handleDeleteBtn }) => {
  const { title, desc, img, username, userPhoto, createdAt } = post;
  // console.log(post);

  return (
    <div className={styles.postContainer}>
      <UserAvatar
        postId={post._id}
        username={username}
        userPhoto={userPhoto}
        createdAt={createdAt}
        userPost={userPost}
        handleDeleteBtn={handleDeleteBtn}
      />
      <Link to={`/posts/${post._id}`}>
        <div>
          <img className={styles.postImg} src={img} alt="" />
          <h3 className={styles.postTitle}>{title}</h3>

          <p className={styles.postDesc}>{singlePost && desc}</p>
        </div>
        <Like />
      </Link>
    </div>
  );
};

export default Post;
