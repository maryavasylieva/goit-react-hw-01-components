import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingPlan.module.css';

const PricingItem = ({ label, icon, capacity, price, description }) => (
  <div className={styles.pricingItem}>
    <i className={styles.icon} style={{ backgroundImage: `url(${icon})` }} />
    <h2 className={styles[`label${label}`]}>{label}</h2>
    <p className={styles.capacity}>{capacity} storage</p>
    <p className={styles.description}>{description}</p>
    <p className={styles.price}>&#36;{price}/MO</p>
    <button type="button" className={styles[`button${label}`]}>
      Get Started
    </button>
  </div>
);

PricingItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default PricingItem;
