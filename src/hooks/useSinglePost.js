import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useSinglePost = () => {
  const [post, setPost] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:8000/api/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return { post };
};

export default useSinglePost;
