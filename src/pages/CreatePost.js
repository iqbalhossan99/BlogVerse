import React, { useState } from "react";
import Button from "../components/Button";
import InputText from "../components/InputText";
import styles from "../styles/CreatePost.module.css";
import swal from "sweetalert";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const CreatePost = () => {
  const [user, loading, error] = useAuthState(auth);
  const [postTitle, setPostTitle] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [createdPost, setCreatedPost] = useState({});
  const [desc, setDesc] = useState("");

  const username = user?.displayName;
  if (loading) {
    return;
  }

  const handlePublish = (e) => {
    e.preventDefault();

    const createPost = {
      title: postTitle,
      img: img,
      category: category,
      username: username,
      desc: desc,
    };

    if (createdPost.title === postTitle || createdPost.index === 0) {
      swal({ title: "Please try with another title!", icon: "error" });
    }

    const url = `http://localhost:8000/api/posts/`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createPost),
    })
      .catch((err) => {
        console.log(err);
        swal({
          title: `${err}`,
          icon: "error",
        });
      })
      .then((res) => res.json())
      .then((data) => {
        setCreatedPost(data);
        console.log(data._id, createdPost);
        if (data._id) {
          swal({
            title: "The post has been created!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className={styles.createPostContainer}>
      <h2 className="marginBottom-20">Create Post</h2>
      <form onSubmit={handlePublish}>
        <InputText
          className={styles.createPostTitle}
          type="text"
          placeholder="New Post Title Here..."
          name="title"
          icon="title"
          required
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <InputText
          className="marginTop-10"
          type="text"
          placeholder="Post image if any..."
          name="title"
          icon="image"
          onChange={(e) => setImg(e.target.value)}
        />
        <InputText
          className="marginTop-10"
          type="text"
          placeholder="Category"
          name="Category"
          icon="category"
          required
          onChange={(e) => setCategory(e.target.value)}
        />
        <InputText
          className="marginTop-10"
          type="text"
          placeholder="username"
          name="Category"
          icon="person"
          required
          value={user?.displayName}
          disabled={user?.displayName}
        />
        <textarea
          className={styles.textArea}
          placeholder="Description..."
          type="text"
          required
          onChange={(e) => setDesc(e.target.value)}
        />
        <Button className="marginTop-10">
          <span>Publish</span>
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
