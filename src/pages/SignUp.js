import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import Illustration from "../components/Illustration";
import InputText from "../components/InputText";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  console.log(username, email, password, confirmPassword);
  return (
    <>
      <h1 className="pageTitle">Create a new account!</h1>
      <div className="column">
        <Illustration />
        <form action="">
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

          <InputText
            type="password"
            required
            placeholder="Confirm password"
            icon="lock_clock"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <CheckBox
            required
            text="I agree to the Terms &amp; Conditions"
            value={agree}
            onChange={(e) => setAgree(e.target.value)}
          />
          <Button style={{ width: "100%", marginTop: "10px" }}>
            <span>Sign Up</span>
          </Button>
          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
