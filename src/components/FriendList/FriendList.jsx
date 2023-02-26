import { PropTypes } from 'prop-types';
import { List, Friends, FriendName, Avatar, Status } from './Friend.styled';

function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <Friends key={id}>
          <FriendName>{name}</FriendName>
          <Avatar src={avatar} alt={name} width="48" />
          <Status isOnline={isOnline}></Status>
        </Friends>
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};

export default FriendList;
