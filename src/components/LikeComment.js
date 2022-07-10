import React, { useState } from "react";
import styles from "../styles/LikeComment.module.css";

const LikeComment = () => {
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className={styles.likeCommentContainer}>
      <div className={styles.left}>
        <span
          onClick={handleLike}
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

export default LikeComment;
