import React from 'react';
import './App.css'
const App = () => {
  return (
    <div className='app'>
      <div  className='cash'> Cash </div>
      <div className='jumbotron' style={{ display: 'flex' }} >
        <button className='btn btn-primary'> Recharge</button>
        <button className='btn btn-primary'> Withdraw from account</button>
        <button className='btn btn-primary'> Add Customer </button>
      </div>
      <div className='customers'>
        Customers
      </div>
    </div>
  );
};
export default App;	