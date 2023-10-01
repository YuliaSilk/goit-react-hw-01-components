import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./friendListItem.js";
import styles from "./friendList.module.css";
// import friends from "../data/friends.json";



const FriendList = ({ friends }) => (
    <ul className={styles['friend-list']}>
        {friends.map((friend) => (
            <FriendListItem key={friend.id} {...friend} />
        ))}
    </ul>
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default FriendList;

