import React from "react";
import useComments from "../hooks/useComments";
import styles from "../styles/Comments.module.css";

const Comments = () => {
  const { comments } = useComments();
  return (
    <div>
      {comments?.map((comment, i) => (
        <div key={i} className={styles.comments}>
          <h3 className={styles.user}>{comment.username}</h3>
          <p className={styles.commentText}>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
