import React from 'react';
import PropTypes from 'prop-types';

import StatList from './StatList';
import styles from './Stats.module.css';

const Stats = ({ title = '', stats }) => (
  <section className={styles.statsSection}>
    <h2 className={styles.title}>{title}</h2>
    <StatList stats={stats} />
  </section>
);

Stats.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.instanceOf(Array).isRequired,
};

export default Stats;
