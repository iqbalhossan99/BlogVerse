import React from "react";
import Layout from "./components/Layout.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "../src/styles/App.css";
import { AuthProvider } from "./contexts/AuthContext.js";
import SinglePost from "./components/SinglePost";
import SearchResults from "./pages/SearchResults.js";
import CreatePost from "./pages/CreatePost.js";

const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/posts/:id" exact element={<SinglePost />} />
          <Route path="/searchPosts" exact element={<SearchResults />} />
          <Route path="/createPost" exact element={<CreatePost />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signUp" exact element={<SignUp />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
};

export default App;
