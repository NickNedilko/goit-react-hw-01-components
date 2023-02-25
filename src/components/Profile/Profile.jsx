import { PropTypes } from 'prop-types';
import {
  UserProfile,
  Description,
  Location,
  Tag,
  Avatar,
  UserName,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

function Profile({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <UserProfile>
      <Description>
        <Avatar width="150px" src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity> {followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label> Views</Label>
          <Quantity> {views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label> Likes</Label>
          <Quantity> {likes}</Quantity>
        </StatsItem>
      </Stats>
    </UserProfile>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
export default Profile;
