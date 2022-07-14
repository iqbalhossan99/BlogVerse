import React from "react";
import Post from "./Post";
import styles from "../styles/Posts.module.css";
import usePosts from "../hooks/usePosts";
import { useSearch } from "../contexts/SearchContext";

const Posts = () => {
  const { posts } = usePosts();

  const { filterPosts } = useSearch();

  // console.log(filterPosts.length);

  // console.log(posts);
  return (
    <div className={styles.feed}>
      {filterPosts.length < 1
        ? posts?.map((post) => <Post key={post._id} post={post} />)
        : filterPosts?.map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
};

export default Posts;
