import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from 'redux';
import { Provider  } from 'react-redux';
const defaultState = {
    cash:0
}
function reducer (state=defaultState,action){
    switch (action.type){
        case 'ADD_CASH':
            return {...state, cash: state.cash + action.payload}
        case 'GET_CASH':
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}
const store = createStore(reducer)
store.dispatch({type:'ADD_CASH',payload:10})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
