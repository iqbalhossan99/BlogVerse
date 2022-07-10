import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./Post";
import styles from "../styles/Posts.module.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:8000/api/posts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={styles.feed}>
      {posts?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
