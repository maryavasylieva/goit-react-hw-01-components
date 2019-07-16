import React from 'react';

import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const UserStats = ({ user }) => (
  <ul className={styles.stats}>
    <li className={styles.list}>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{user.stats.followers}</span>
    </li>
    <li className={styles.list}>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{user.stats.views}</span>
    </li>
    <li className={styles.list}>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{user.stats.likes}</span>
    </li>
  </ul>
);

UserStats.propTypes = {
  user: PropTypes.shape({
    stats: PropTypes.objectOf(PropTypes.number),
  }).isRequired,
};

export default UserStats;
