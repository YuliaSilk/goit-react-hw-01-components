import PropTypes from "prop-types";
import {FriendListItem} from "./friendListItem";
import styles from "./friendList.module.css";
// import friends from "../data/friends.json";



export const FriendList = ({ friends }) => {
    return (
    <ul className={styles['friend-list']}>
        {friends.map((friend) => (
           <FriendListItem 
            key={friend.id} 
            // {...friend} 
            avatar={friends.avatar}
            name={friends.name}
            isOnline={friends.isOnline || friends.isOffline}
            />
        ))}
    </ul>
)}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
        })
    ).isRequired,
};

