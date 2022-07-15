import React, { useEffect, useState } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = `https://blog-verse.herokuapp.com/api/posts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { posts };
};

export default usePosts;
