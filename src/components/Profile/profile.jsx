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
                     <p className={styles.label}>Followers</p>
                     <p className={styles.quantity}>{stats.followers}</p>
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






