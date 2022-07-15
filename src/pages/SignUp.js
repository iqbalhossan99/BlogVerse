import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import Illustration from "../components/Illustration";
import InputText from "../components/InputText";
import { useAuth } from "../contexts/AuthContext";
import swal from "sweetalert";
import SocialLogin from "../components/SocialLogin";
import Divider from "../components/Divider";
import useToken from "../hooks/useToken";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [user, loading] = useAuthState(auth);
  const [token] = useToken(user);

  const { signUp } = useAuth();

  // Handle Sign Up btn
  const handleSingUp = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      signUp(username, email, password);
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAgree("");
    } else {
      swal({
        title: "Password doesn't matched",
        icon: "error",
      });
    }
  };

  return (
    <>
      <h1 className="pageTitle">Create a new account!</h1>
      <div className="column">
        <Illustration />
        <div>
          <form onSubmit={handleSingUp}>
            <InputText
              type="text"
              placeholder="Enter name"
              icon="person"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <InputText
              type="text"
              required
              placeholder="Enter email"
              icon="alternate_email"
              className="marginTop-10"
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

            <InputText
              type="password"
              required
              placeholder="Confirm password"
              icon="lock_clock"
              className="marginTop-10 marginBottom-5"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <CheckBox
              required
              text="I agree to the Terms &amp; Conditions"
              value={agree}
              onChange={(e) => setAgree(e.target.value)}
            />
            <Button className="marginTop-10 width-100">
              <span>Sign Up</span>
            </Button>
            <div className="info ">
              Already have an account? <Link to="/login">Login</Link> instead.
            </div>
          </form>
          {/* Divider */}
          <Divider />
          {/* Social login */}
          <SocialLogin />
        </div>
      </div>
    </>
  );
};

export default SignUp;
