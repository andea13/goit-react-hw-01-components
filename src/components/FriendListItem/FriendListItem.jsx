import PropTypes from 'prop-types';
import {
  FriendsListItem,
  Status,
  AvatarIcon,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <FriendsListItem key={id}>
      <Status>{isOnline}</Status>
      <AvatarIcon src={avatar} alt="User avatar" width="30" />
      <FriendName>{name}</FriendName>
    </FriendsListItem>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

//  {{ isOnline }
//       ? document.querySelector('.status').classList.add('online')
//       : document.querySelector('.status').classList.add('offline')}
