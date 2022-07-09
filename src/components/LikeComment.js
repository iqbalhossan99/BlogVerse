import React from "react";
import styles from "../styles/LikeComment.module.css";

const LikeComment = () => {
  return (
    <div className={styles.likeCommentContainer}>
      <div className={styles.left}>
        {/* <img className={styles.likeIcon} src={Like} alt="Like" /> */}
        <span class="material-icons-outlined">thumb_up</span>
        <span class="material-icons-outlined">favorite_border</span>{" "}
        <span className={styles.postLikeCounter}> people like it</span>
      </div>
      <div className={styles.right}>
        <span className={styles.postCommentText}>Comments</span>
      </div>
    </div>
  );
};

export default LikeComment;
