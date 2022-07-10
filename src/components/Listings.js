import React from "react";
import { ListingDAta } from "./sidebarData";
import styles from "../styles/Listing.module.css";
import { Link } from "react-router-dom";

const Listings = () => {
  return (
    <>
      <div className={styles.listsContainer}>
        <h3 className={styles.listTitle}>Listings</h3>
        {ListingDAta.map((list, i) => (
          <Link key={i} to={list.path}>
            <p className={styles.listName}>{list.listName}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Listings;
