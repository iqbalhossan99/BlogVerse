import React from "react";
import Layout from "./components/Layout.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts.js";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "../src/styles/App.css";
import { AuthProvider } from "./contexts/AuthContext.js";

const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/posts" exact element={<Posts />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signUp" exact element={<SignUp />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
};

export default App;
