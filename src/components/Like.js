import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/LikeComment.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import useSinglePost from "../hooks/useSinglePost";
import swal from "sweetalert";

const Like = () => {
  const { post } = useSinglePost();

  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const [user, loading] = useAuthState(auth);

  const { id } = useParams();
  const userId = user?.uid;

  const handleLike = (e) => {
    e.preventDefault();

    const createLike = {
      likes: userId,
    };

    // const url = `http://localhost:8000/api/posts/${id}/like`;

    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(createLike),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.updatedAt) {
    //       swal({
    //         title: "Comment successfully submit!",
    //         icon: "success",
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     swal({
    //       title: `${err}`,
    //       icon: "error",
    //     });
    //   });

    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.likeCommentContainer}>
      <div className={styles.left}>
        <span
          // onClick={handleLike}
          className={`material-icons-outlined ${styles.lcIcon}`}
        >
          thumb_up
        </span>
        <span className={`material-icons-outlined ${styles.lcIcon}`}>
          favorite_border
        </span>
        <span className={styles.postLikeCounter}> {like}</span>
      </div>
      <div className={styles.right}>
        <span className={styles.postCommentText}>Comments</span>
      </div>
    </div>
  );
};

export default Like;
