import { signOut } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import swal from "sweetalert";
import auth from "../firebase.init";

const AuthContext = React.createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [sendEmailVerification, sending, verificationError] =
    useSendEmailVerification(auth);

  const [signInWithEmailAndPassword, loginUser, loginLoading, loginError] =
    useSignInWithEmailAndPassword(auth);

  //   Loading
  if (loading || updating || sending || loginLoading) {
    return;
  }

  //   Error Handling
  if (error || updateError || verificationError || loginError) {
    swal({
      title: `${error || updateError || verificationError}`,
      icon: "error",
    });
  }

  // Sign Up
  const signUp = async (username, email, password) => {
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({
      displayName: username,
    });
    await sendEmailVerification();
    await swal({
      title: "User Created",
      icon: "success",
    });
  };

  //   Login
  const signIn = async (email, password) => {
    await signInWithEmailAndPassword(email, password);
    await swal({
      title: "You are log In now!",
      icon: "success",
    });
  };

  // Log out
  const logOut = async () => {
    await signOut(auth);
    await swal({
      title: "You are log out now!",
      icon: "success",
    });
  };

  const value = { signUp, signIn, logOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
