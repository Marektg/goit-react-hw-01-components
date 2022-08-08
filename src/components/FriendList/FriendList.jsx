import { FriendListItem } from '../FriendListItem/FriendListItem';
import PropTypes from 'proptypes';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    const { friendList } = styles;

    return (
        <ul className={friendList}>
            {friends.length > 0 &&
                friends.map(({ avatar, name, isOnline, id }) => (
                    <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
                ))}
        </ul>
    );
};
FriendList.propTypes = {
    friends: PropTypes.array,
}
