import React from "react";

import useSinglePost from "../hooks/useSinglePost";
import CommentBox from "./CommentBox";
import Comments from "./Comments";
import Post from "./Post";
import styles from "../styles/SinglePost.module.css";

const SinglePost = () => {
  const { post } = useSinglePost();
  return (
    <div className={styles.singlePost}>
      <Post post={post} singlePost="singlePost" />
      <section className={styles.commentSection}>
        <CommentBox />
        <Comments />
      </section>
    </div>
  );
};

export default SinglePost;
