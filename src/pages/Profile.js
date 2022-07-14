import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import noAvatar from "../assets/images/noAvatar.png";
import android_app from "../assets/images/android_app.jpg";
import LeftSidebar from "../components/LeftSidebar";
import styles from "../styles/Profile.module.css";
import RightSidebar from "../components/RightSidebar";
import Posts from "../components/Posts";

export default function Profile() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return;
  }
  return (
    <>
      <div className={styles.profile}>
        <LeftSidebar />
        <div className={styles.profileRight}>
          <div className={styles.profileRightTop}>
            <div className={styles.profileCover}>
              <img
                className={styles.profileCoverImg}
                src={android_app}
                alt="CoverImage"
              />
              <img
                className={styles.profileUserImg}
                src={user?.photoURL || noAvatar}
                alt="UserImage"
              />
            </div>
            <div className={styles.profileInfo}>
              <h4 className={styles.profileInfoName}>{user?.displayName}</h4>
            </div>
          </div>
          <div className={styles.profileRightBottom}>
            <Posts />
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
}
