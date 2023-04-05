import React from 'react';
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
const App = () => {
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);
  const dispatch = useDispatch();
  const addCash = (cash)=>{
    dispatch({type:'ADD_CASH',payload:cash})
  }
  const getCash = (cash)=>{
    dispatch({type:'GET_CASH',payload:cash})
  }
  const addCustomer = (name)=>{
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }
  const removeCustomer = (customer)=>{
    dispatch(removeCustomerAction(customer.id))
  }
  return (
    <div className='app'>
      <div  className='cash'> {cash} </div>
      <div className='jumbotron' >
        <button onClick={()=>addCash(+prompt())} className='btn btn-primary'> Add money </button>
        <button onClick={()=>getCash(+prompt())} className='btn btn-primary'> Get money </button>
        <button onClick={()=>addCustomer(prompt())} className='btn btn-primary'> Add Customer </button>
      </div>
      <div className='customers'>
        {
          customers.length > 0 ?
          <div>{customers.map(customer => <div onClick={()=>removeCustomer(customer)}
             key={customer.id}>{customer.name}</div>)}</div>
          : 
          <div>No customers!</div>
        }
      </div>
    </div>
  );
};
export default App;	


