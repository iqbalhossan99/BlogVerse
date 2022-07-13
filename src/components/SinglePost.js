import React, { useEffect, useState } from "react";

import useSinglePost from "../hooks/useSinglePost";
import CommentBox from "./CommentBox";
import Comments from "./Comments";
import Post from "./Post";
import styles from "../styles/SinglePost.module.css";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { post } = useSinglePost();
  // console.log(post);
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
