import { PropTypes } from 'prop-types';
import css from './FriendList.module.css'

function FriendList({friends}){
    return <ul className={css.list}>
  {friends.map(({id, name, avatar, isOnline})=>
    <li key={id} className = {css.friendList}>
    <span className={css.friendName}>{name}</span>
    <img src={avatar} alt={name} width="48" />
    <p className={`${css.status} ${css[isOnline]}`}></p>
  </li>)}
    </ul>
}

FriendList.propTypes = {
  friends: PropTypes.objectOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }))
};


export default FriendList 