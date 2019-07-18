import React from 'react';

import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const UserInfo = ({ user }) => (
  <div className={styles.description}>
    <img className={styles.avatar} src={user.avatar} alt={user.alt} />
    <p className={styles.name}>{user.name}</p>
    <p className={styles.tag}>{user.tag}</p>
    <p className={styles.location}>{user.location}</p>
  </div>
);

UserInfo.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    alt: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserInfo;
