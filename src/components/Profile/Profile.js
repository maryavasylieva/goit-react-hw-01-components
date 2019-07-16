import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Profile/Profile.module.css';
import UserInfo from './UserInfo';
import UserStats from './UserStats';

const Profile = ({ user }) => (
  <div className={styles.profile}>
    <UserInfo user={user} />
    <UserStats user={user} />
  </div>
);

Profile.defaultProps = {
  'user.alt': 'User photo',
};

Profile.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default Profile;
