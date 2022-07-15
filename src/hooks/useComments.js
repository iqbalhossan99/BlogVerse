import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useComments = () => {
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  const url = `https://blog-verse.herokuapp.com/api/posts/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setComments(data.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return { comments };
};

export default useComments;
