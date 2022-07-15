import React, { useEffect } from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import auth from "../firebase.init";
import swal from "sweetalert";
import styles from "../styles/SocialLogin.module.css";
import Button from "./Button";
import useToken from "../hooks/useToken";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
  const [token] = useToken(googleUser || githubUser || facebookUser);
  const navigate = useNavigate();

  // handle error
  if (googleError || githubError || facebookError) {
    swal({
      title:
        googleError?.message || githubError?.message || facebookError?.message,
      text: "You clicked the button!",
      icon: "error",
    });
  }

  useEffect(() => {
    if (token) {
      swal({
        title: "You are log in now!",
        text: "You clicked the button!",
        icon: "success",
      });
      navigate("/");
    }
  }, [googleUser || githubUser || facebookUser]);

  // loading
  if (googleLoading || githubLoading || facebookLoading) {
    return;
  }

  // google sign in
  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
  };

  // facebook sign in
  const handleFacebookLogin = async () => {
    await signInWithFacebook();
  };

  // github sign in
  const handleSignInWithGithub = async () => {
    await signInWithGithub();
  };
  return (
    <div className="block">
      <Button
        onClick={handleSignInWithGoogle}
        className="marginTop-10 width-100"
      >
        <span className={styles.socialIcon}>
          <FcGoogle />
        </span>
        <span className={styles.socialName}> Google Sign In</span>
      </Button>
      <Button onClick={handleFacebookLogin} className="marginTop-10 width-100">
        <span className={styles.socialIcon}>
          <FaFacebook />
        </span>
        <span className={styles.socialName}>Facebook Sign In</span>
      </Button>
      <Button
        onClick={handleSignInWithGithub}
        className="marginTop-10 width-100"
      >
        <span className={styles.socialIcon}>
          <FaGithub className={styles.gitHup} />
        </span>
        <span className={styles.socialName}>Github Sign In</span>
      </Button>
    </div>
  );
};

export default SocialLogin;
