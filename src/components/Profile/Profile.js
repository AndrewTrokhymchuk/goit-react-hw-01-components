import React from 'react';
import PropTypes from 'prop-types';
import style from './Pofile.module.css';

export default function Profile({ avatar, username, tag, location, stats }) {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={style.avatar}
          width="200"
        />
        <h2 className={style.name}>{username}</h2>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>
      <ul className={style.stats}>
        <li className={style.item}>
          <span className={style.title}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li className={style.item}>
          <span className={style.title}>Views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li className={style.item}>
          <span className={style.title}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
