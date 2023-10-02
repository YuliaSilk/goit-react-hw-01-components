import styles from "./friendList.module.css";

export const FriendList = ({ friends }) => {
    return (<div>
    <ul className={styles.friendList}>
        {friends.map((friend) => (
            <li className={styles.item} key={friend.id}>
                <span className={styles.status} style={{ background: friend.isOnline ? "green" : "red"}}></span>
                <img className={styles.avatar} src={friend.avatar} alt="User avatar"></img>
                <p className={styles.name}>{friend.name}</p>
            </li>
        ))}
    </ul>
    </div>
);
}


