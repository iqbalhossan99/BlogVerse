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
import { SearchProvider } from "./contexts/SearchContext.js";
import Profile from "./pages/Profile.js";

const App = () => {
  return (
    <AuthProvider>
      <SearchProvider>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/posts/:id" exact element={<SinglePost />} />
            <Route path="/searchPosts" exact element={<SearchResults />} />
            <Route path="/createPost" exact element={<CreatePost />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signUp" exact element={<SignUp />} />
          </Routes>
        </Layout>
      </SearchProvider>
    </AuthProvider>
  );
};

export default App;
