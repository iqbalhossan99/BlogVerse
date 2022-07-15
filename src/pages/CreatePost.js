import React, { useState } from "react";
import Button from "../components/Button";
import InputText from "../components/InputText";
import styles from "../styles/CreatePost.module.css";
import swal from "sweetalert";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import TextArea from "../components/TextArea";
import useSinglePost from "../hooks/useSinglePost";

const CreatePost = () => {
  const [user, loading] = useAuthState(auth);
  const { post } = useSinglePost();

  const [postTitle, setPostTitle] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [createdPost, setCreatedPost] = useState({});
  const [desc, setDesc] = useState("");

  const userEmail = user?.email;
  const username = user?.displayName;
  const userPhoto = user?.photoURL;
  if (loading) {
    return;
  }

  const handlePublish = (e) => {
    e.preventDefault();

    const createPost = {
      title: postTitle,
      img: img,
      category: category,
      desc: desc,
      username: username,
      email: userEmail,
      userPhoto: userPhoto,
    };

    // handle the error
    if (createdPost.title === postTitle || createdPost.index === 0) {
      return swal({ title: "Please try with another title!", icon: "error" });
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

  // Update post
  const handleUpdate = (e) => {
    e.preventDefault();

    const updatePost = {
      title: postTitle,
      img: img,
      category: category,
      desc: desc,
      username: username,
      email: userEmail,
      userPhoto: userPhoto,
    };

    const url = `http://localhost:8000/api/posts/${post._id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatePost),
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
        if (data._id) {
          swal({
            title: "The post has been updated!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className={styles.createPostContainer}>
      <h2 className="marginBottom-20">Create Post</h2>
      <form onSubmit={post._id ? handleUpdate : handlePublish}>
        <InputText
          className={styles.createPostTitle}
          type="text"
          placeholder="New Post Title Here..."
          name="title"
          icon="title"
          defaultValue={post.title ? post.title : postTitle}
          required
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <InputText
          className="marginTop-10"
          type="text"
          placeholder="Post image if any..."
          name="title"
          icon="image"
          defaultValue={post.img ? post.img : img}
          onChange={(e) => setImg(e.target.value)}
        />
        <InputText
          className="marginTop-10"
          type="text"
          placeholder="Category"
          name="Category"
          icon="category"
          required
          defaultValue={post.category ? post.category : category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <InputText
          className="marginTop-10"
          type="text"
          placeholder="username"
          name="username"
          icon="person"
          required
          defaultValue={post.username ? post.username : user?.displayName}
          disabled={user?.displayName}
        />
        <InputText
          className="marginTop-10"
          type="text"
          placeholder="email address"
          name="email"
          icon="email"
          required
          defaultValue={post.email ? post.email : user?.email}
          disabled={user?.email}
        />
        <TextArea
          placeholder="Description..."
          type="text"
          required
          defaultValue={post.desc ? post.desc : desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        {post?.title ? (
          <Button className="marginTop-10">
            <span>Update</span>
          </Button>
        ) : (
          <Button className="marginTop-10">
            <span>Publish</span>
          </Button>
        )}
      </form>
    </div>
  );
};

export default CreatePost;
