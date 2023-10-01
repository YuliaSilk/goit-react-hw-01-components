import React from "react";
import PropTypes from "prop-types";
import styles from "./profile.module.css";
import user from "../data/user.json";

const Profile = () => {
    return (
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
    );
  };
//   App();

// const Profile = ({ username, tag, location, avatar, stats }) => (
//     <div className={styles.profile}>
//         <div className={styles.description}>
//             <img src={avatar} alt="User avatar" className={styles.avatar}></img>
//             <h2 className={styles.name}>{username}</h2>
//             <span className={styles.tag}>@{tag}</span>
//             <span className={styles.location}>{location}</span>
//         </div>
//         <ul className={styles.stats}>
//             <li>
//                 <span className={styles.label}>Follovers</span>
//                 <span className={styles.quantity}>{stats.follovers}</span>
//             </li>
//             <li>
//                 <span className={styles.label}>Views</span>
//                 <span className={styles.quantity}>{stats.views}</span>
//             </li>
//             <li>
//                 <span className={styles.label}>Likes</span>
//                 <span className={styles.quantity}>{stats.likes}</span>
//             </li>
//         </ul>
//     </div>
// )

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        follovers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};

export default Profile;