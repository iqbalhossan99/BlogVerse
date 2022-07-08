import React from "react";
import { useContext } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import swal from "sweetalert";
import auth from "../firebase.init";

const AuthContext = React.createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // Sign Up
  const signUp = async (username, email, password) => {
    await createUserWithEmailAndPassword(email, password);
    await swal({
      title: "User Created",
      icon: "success",
    });
  };

  const value = { signUp };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
