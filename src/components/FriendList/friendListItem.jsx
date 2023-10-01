import React from "react";
import PropTypes from "prop-types";
import styles from "./friendListItem.module.css";
import friends from "../data/friends.json"

const App = () => {
    return (
        <div>
            <friends
            avatar={friends.avatar}
            name={friends.name}
            isOnline={friends.isOnline || friends.isOffline}
            id={friends.id}>
            </friends>
            
        </div>
    )
}
App();

const FriendListItem = ({ avatar, name, isOnline}) => (
    <li className={styles.item}>
        <span className={isOnline ? styles.online : styles.offline}></span>
        <img className={styles.avatar} src={avatar} alt={`User avatar - ${name}`} widfh="48"></img>
        <p className={styles.name}>{name}</p>
    </li>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
