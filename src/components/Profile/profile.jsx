import styles from "./profile.module.css";

export const Profile = (props) => {
    const username = props.username;
    const tag = props.tag;
    const location = props.location;
    const avatar = props.avatar;
    const stats = props.stats;

    return <div className={styles.container}>
    <div className={styles.profile}>
             <div className={styles.description}>
                <img src={avatar} alt="User avatar" className={styles.avatar}></img>
                 <h2 className={styles.name}>{username}</h2>
                 <p className={styles.tag}>@{tag}</p>
                 <p className={styles.location}>{location}</p>
             </div>
             <ul className={styles.stats}>
                <li>
                     <p className={styles.label}>Follovers</p>
                     <p className={styles.quantity}>{stats.follovers}</p>
               </li>
                <li>
                     <p className={styles.label}>Views</p>
                     <p className={styles.quantity}>{stats.views}</p>
                 </li>
                <li>
                     <p className={styles.label}>Likes</p>
                     <p className={styles.quantity}>{stats.likes}</p>
                 </li>
            </ul>
       </div>
       </div>
}


// export const Profile = ({ username, tag, location, avatar, stats }) => {
//     return (
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
// } 
// Profile.propTypes = {
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     stats: PropTypes.shape({
//         follovers: PropTypes.number.isRequired,
//         views: PropTypes.number.isRequired,
//         likes: PropTypes.number.isRequired,
//     }).isRequired,
// };





