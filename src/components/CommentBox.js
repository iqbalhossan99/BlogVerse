import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import TextArea from "./TextArea";
import auth from "../firebase.init";
import styles from "../styles/Comments.module.css";
import Button from "./Button";
import swal from "sweetalert";

const CommentBox = () => {
  const [user, loading] = useAuthState(auth);
  const [newComment, setNewComment] = useState("");
  const { id } = useParams();

  if (loading) {
    return;
  }
  const username = user?.displayName;
  // console.log(user);

  // create comment
  const handleComment = (e) => {
    e.preventDefault();

    const createComment = {
      comment: newComment,
      username: username,
    };

    const url = `http://localhost:8000/api/posts/${id}/comment`;

    if (newComment === "") {
      return swal({
        title: "Put your comment here...!",
        icon: "error",
      });
    }

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createComment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.updatedAt) {
          setNewComment("");
          swal({
            title: "Comment successfully submit!",
            icon: "success",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        swal({
          title: `${err}`,
          icon: "error",
        });
      });
  };

  return (
    <div className={styles.commentBox}>
      <form onSubmit={handleComment}>
        <TextArea
          className={styles.commentArea}
          style={{ height: "100px" }}
          placeholder="Put your comments here..."
          type="text"
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button className="marginTop-10">
          <span>Submit</span>
        </Button>
      </form>
    </div>
  );
};

export default CommentBox;
