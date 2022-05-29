import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={style.friends}>
      {friends.map(friend => (
        <li className={style.item} key={friend.id}>
          <span
            className={
              friend.isOnline ? style.online : style.offline
            }
          ></span>
          <img className={style.avatar} src={friend.avatar} alt="" width="50" />
          <p className={style.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
