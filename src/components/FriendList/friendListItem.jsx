import PropTypes from "prop-types";
import styles from "./friendListItem.module.css";


export const FriendListItem = ({ avatar, name, isOnline}) => {
return (
    <div>
    <li className={styles.item}>
        <span className={isOnline ? styles.online : styles.offline}></span>
        <img className={styles.avatar} src={avatar} alt={`User avatar - ${name}`} widfh="48"></img>
        <p className={styles.name}>{name}</p>
    </li>
    </div>
);}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};





// import friends from "../data/friends.json"

// const friendListItemApp = () => {
//     return (
//         <div>
//             <FriendListItem
//             avatar={friends.avatar}
//             name={friends.name}
//             isOnline={friends.isOnline || friends.isOffline}
//             id={friends.id}>
//             </FriendListItem>
            
//         </div>
//     )
// }
// friendListItemApp();