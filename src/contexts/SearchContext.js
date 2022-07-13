import React, { useState } from "react";
import { useContext } from "react";
import swal from "sweetalert";
import usePosts from "../hooks/usePosts";

const SearchContext = React.createContext();

const useSearch = () => {
  return useContext(SearchContext);
};

const SearchProvider = ({ children }) => {
  const { posts } = usePosts();
  const [filterPosts, setFilterPosts] = useState([]);
  const search = (searchTerm) => {
    if (searchTerm === "") {
      return swal({
        title: "Write something on the search box.....",
      });
    }

    const getFilterPost = posts.filter((post) => {
      if (
        (post.title &&
          post.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (post.category &&
          post.category.toLowerCase().includes(searchTerm.toLowerCase()))
      ) {
        return post;
      }
    });
    setFilterPosts(getFilterPost);
  };

  const value = { search, filterPosts };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export { SearchProvider, useSearch };
