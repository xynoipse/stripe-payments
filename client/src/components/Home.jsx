import React from 'react';

const Home = () => {
  return (
    <>
      <div class="well">
        <h2>Node.js + React Stripe Payments</h2>
      </div>

      <div class="well">
        <h2>Running in Test Mode</h2>
        <p>
          This demo is running in Stripe test mode, so feel free to submit payments with
          testing cards.
        </p>

        <a class="btn btn-secondary" href="https://github.com/xynoipse/stripe-payments">
          source code
        </a>
      </div>
    </>
  );
};

export default Home;
