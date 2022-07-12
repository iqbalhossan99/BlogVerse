import React from "react";
import Post from "./Post";
import styles from "../styles/Posts.module.css";
import usePosts from "../hooks/usePosts";

const Posts = () => {
  const { posts } = usePosts();
  // console.log(posts);
  return (
    <div className={styles.feed}>
      {posts?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
