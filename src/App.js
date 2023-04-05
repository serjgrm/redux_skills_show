import React from 'react';
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
const App = () => {
  const cash = useSelector(state => state.cash.cash);
  const dispatch = useDispatch();
  const addCash = (cash)=>{
    dispatch({type:'ADD_CASH',payload:cash})
  }
  const getCash = (cash)=>{
    dispatch({type:'GET_CASH',payload:cash})
  }
  return (
    <div className='app'>
      <div  className='cash'> {cash} </div>
      <div className='jumbotron' style={{ display: 'flex'}} >
        <button onClick={()=>addCash(+prompt())} className='btn btn-primary'> Add money </button>
        <button onClick={()=>getCash(+prompt())} className='btn btn-primary'> Get money </button>
        <button className='btn btn-primary'> Add Customer </button>
      </div>
      <div className='customers'>
        Customers
      </div>
    </div>
  );
};
export default App;	


