import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <>
      {/* <Nav /> */}
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
