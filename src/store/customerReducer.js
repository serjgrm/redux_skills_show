const defaultCustomer = {
    customer:[]
}
export function customerReducer (state=defaultCustomer,action){
    switch (action.type){
        case 'ADD_CUSTOMER':
            return {...state, cash: state.cash + action.payload}
        case 'REMOVE_CUSTOMER':
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}
