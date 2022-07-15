import { async } from "@firebase/util";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import Divider from "../components/Divider";
import Illustration from "../components/Illustration";
import InputText from "../components/InputText";
import SocialLogin from "../components/SocialLogin";
import { useAuth } from "../contexts/AuthContext";
import auth from "../firebase.init";
import useToken from "../hooks/useToken";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const [user, loading, error] = useAuthState(auth);
  const [token] = useToken(user);

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn(email, password);
  };

  if (token) {
    navigate("/");
  }
  return (
    <>
      <h1 className="pageTitle">Login To Your Account!</h1>
      <div className="column">
        <Illustration />
        <div>
          <form onSubmit={handleSignIn}>
            <InputText
              type="text"
              required
              placeholder="Enter email"
              icon="alternate_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputText
              type="password"
              required
              placeholder="Enter password"
              icon="lock"
              className="marginTop-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button className="marginTop-10 width-100">
              <span>Log In</span>
            </Button>
            <div className="info">
              Already have an account? <Link to="/signUp">Sing Up</Link>{" "}
              instead.
            </div>
          </form>
          {/* Divider */}
          <Divider />
          {/* Social Login */}
          <SocialLogin />
        </div>
      </div>
    </>
  );
};

export default Login;
