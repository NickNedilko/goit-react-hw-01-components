import { PropTypes } from 'prop-types';
import css from './Profile.module.css'

function Profile({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.profileImg} width="150px" src={avatar} alt={username} />
        <p className={css.name}>{username}</p>
        <p className={css.text}>{tag}</p>
        <p className={css.text}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.quantity}> {followers}</span>
        </li>
        <li className={css.statsItem}>
          <span> Views</span>
          <span className={css.quantity}> {views}</span>
        </li>
        <li className={css.statsItem}>
          <span> Likes</span>
          <span className={css.quantity}> {likes}</span>
        </li>
      </ul>
    </div>
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