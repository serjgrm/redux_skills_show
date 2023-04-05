import React from 'react';
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
const App = () => {
  const cash = useSelector(state=>state.cash)
  const dispatch = useDispatch();

  const getCash = (cash)=>{
    dispatch({type:'ADD_CASH',payload:cash})
  }

  return (
    <div className='app'>
      <div  className='cash'> {cash} </div>
      <div className='jumbotron' style={{ display: 'flex'}} >
        <button onClick={()=>getCash(+prompt())} className='btn btn-primary'> Add money </button>
        <button className='btn btn-primary'> Get money </button>
        <button className='btn btn-primary'> Add Customer </button>
      </div>
      <div className='customers'>
        Customers
      </div>
    </div>
  );
};
export default App;	