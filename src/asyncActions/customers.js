import { addManyCustomersAction } from "../store/customerReducer"

// To be able to use fetchCustomers in action we have to return another function
export const fetchCustomers = ()=>{
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dispatch(addManyCustomersAction(json)))
    }
}
