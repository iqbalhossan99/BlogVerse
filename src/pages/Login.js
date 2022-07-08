import { async } from "@firebase/util";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import Illustration from "../components/Illustration";
import InputText from "../components/InputText";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn(email, password);
  };

  return (
    <>
      <h1 className="pageTitle">Login To Your Account!</h1>
      <div className="column">
        <Illustration />
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button style={{ width: "100%", marginTop: "10px" }}>
            <span>Log In</span>
          </Button>
          <div className="info">
            Already have an account? <Link to="/signUp">Sing Up</Link> instead.
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
