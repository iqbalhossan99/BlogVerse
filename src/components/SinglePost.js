import React from "react";

import useSinglePost from "../hooks/useSinglePost";
import Post from "./Post";

const SinglePost = () => {
  const { post } = useSinglePost();
  return (
    <>
      <Post post={post} singlePost="singlePost" />
    </>
  );
};

export default SinglePost;
