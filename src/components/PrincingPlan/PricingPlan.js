import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from './PricingItem';
import styles from './PricingPlan.module.css';

const PricingPlan = ({ items }) => (
  <ul className={styles.pricingPlan}>
    {items.map(item => (
      <li key={item.id} className={styles.item}>
        <PricingItem
          label={item.label}
          icon={item.icon}
          capacity={item.capacity}
          price={item.price}
          description={item.description}
        />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default PricingPlan;
