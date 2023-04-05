const defaultCustomer = {
    customers:[]
}
const ADD_CUSTOMER = 'ADD_CUSTOMER',
      REMOVE_CUSTOMER = 'REMOVE_CUSTOMER',
      ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';

export function customerReducer (state=defaultCustomer,action){
    switch (action.type){
        case ADD_MANY_CUSTOMERS:
            return {...state,customers:[...state.customers,...action.payload]}
        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMER:
            return { customers: state.customers.filter(customer=>customer.id !== action.payload)}
        default:
            return state
    }
}


export const addCustomerAction = (payload)=> ({type:ADD_CUSTOMER,payload}); 
export const removeCustomerAction = (payload)=> ({type:REMOVE_CUSTOMER,payload}); 
export const addManyCustomersAction = (payload)=> ({type:ADD_MANY_CUSTOMERS,payload}); 
