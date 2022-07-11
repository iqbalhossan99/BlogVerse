import React from "react";
import usePosts from "../hooks/usePosts";

const SearchResults = () => {
  const { posts } = usePosts([]);

  return <div>{posts.filter}</div>;
};

export default SearchResults;
