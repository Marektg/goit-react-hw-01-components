import PropTypes from 'proptypes';
import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    const { item, online, offline, avatarUrl, friendName } = styles;
    return (
        < li className={item}>
            <span className={isOnline ? online : offline}></span>
            <img className={avatarUrl} src={avatar} alt='User avatar' width="48" />
            <p className={friendName}>{name}</p>
        </li >
    )
};
FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}