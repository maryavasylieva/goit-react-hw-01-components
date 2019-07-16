import React from 'react';
import PropTypes from 'prop-types';

import TransactionHead from './TransactionHead';
import TransactionBody from './TransactionBody';
import styles from './Transaction.module.css';

const TransactionTable = ({ items }) => (
  <table className={styles.transactionHistory}>
    <TransactionHead />
    <tbody>
      {items.map(item => (
        <TransactionBody
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
        />
      ))}
    </tbody>
  </table>
);

TransactionTable.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default TransactionTable;
