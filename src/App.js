import React from 'react';

import user from './assets/user.json';
import stats from './assets/stats.json';
import transactions from './assets/transaction.json';
import pricingPlan from './assets/princingPlan.json';
import Profile from './components/Profile/Profile';
import Stats from './components/Stats/Stats';
import PricingPlan from './components/PrincingPlan/PricingPlan';
import TransactionTable from './components/Transaction/TransactionTable.js';

function App() {
  return (
    <>
      <Profile user={user} />
      <Stats title="Upload stats" stats={stats} />
      <PricingPlan items={pricingPlan} />
      <TransactionTable items={transactions} />
    </>
  );
}

export default App;
