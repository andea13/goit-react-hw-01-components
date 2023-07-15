import PropTypes from 'prop-types';
import {
  Status,
  AvatarIcon,
  FriendName,
  FriendsListStyledItem,
} from './FriendListStyledItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsListStyledItem>
      <Status isOnline={isOnline}></Status>
      <AvatarIcon src={avatar} alt="User avatar" width="30" />
      <FriendName>{name}</FriendName>
    </FriendsListStyledItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

//  {{ isOnline }
//       ? document.querySelector('.status').classList.add('online')
//       : document.querySelector('.status').classList.add('offline')}
