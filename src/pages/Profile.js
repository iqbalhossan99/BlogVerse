import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import noAvatar from "../assets/images/noAvatar.png";
import android_app from "../assets/images/android_app.jpg";
import LeftSidebar from "../components/LeftSidebar";
import styles from "../styles/Profile.module.css";
import RightSidebar from "../components/RightSidebar";
import Post from "../components/Post";
import { useQuery } from "react-query";
import swal from "sweetalert";

const Profile = () => {
  const [user, loading] = useAuthState(auth);

  const email = user?.email;

  const url = `https://blog-verse.herokuapp.com/api/posts/userposts/${email}`;

  const {
    data: userPosts,
    isFetching,
    refetch,
  } = useQuery("posts", () => fetch(url).then((res) => res.json()));

  if (loading || isFetching) {
    return <h3>Loading</h3>;
  }

  const handleDeleteBtn = async (id) => {
    const decision = await swal({
      title: "Are you sure want to delete this item!",
      buttons: ["Oh noez!", true],
    });
    if (decision) {
      fetch(`https://blog-verse.herokuapp.com/api/posts/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refetch();
        });
    }
  };

  if (loading) {
    return;
  }

  return (
    <>
      <div className={styles.profile}>
        <LeftSidebar />
        <div className={styles.profileRight}>
          <div className={styles.profileRightTop}>
            <div className={styles.profileCover}>
              <img
                className={styles.profileCoverImg}
                src={android_app}
                alt="CoverImage"
              />
              <img
                className={styles.profileUserImg}
                src={user?.photoURL || noAvatar}
                alt="UserImage"
              />
            </div>
            <div className={styles.profileInfo}>
              <h4 className={styles.profileInfoName}>{user?.displayName}</h4>
            </div>
          </div>
          <div className={styles.profileRightBottom}>
            <div className={styles.userPosts}>
              {userPosts.map((post) => (
                <Post
                  key={post._id}
                  post={post}
                  userPost="userPost"
                  handleDeleteBtn={() => handleDeleteBtn(post._id)}
                />
              ))}
            </div>
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
