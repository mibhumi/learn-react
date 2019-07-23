import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import reducerCounter from './reducerCounter';

const initForm = {
    name: ''
}

// const initState = {
//     counter: 0,
// }
//
// const reducerCount = (state = initState, action) => {
//
//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 counter: state.counter + 1
//             }
//
//         case 'DECREMENT':
//             return {
//                 counter: state.counter - 1
//             }
//
//         case 'ADD':
//             return {
//                 counter: state.counter + action.value
//             }
//
//         case 'SUB':
//             return {
//                 counter: state.counter - action.value
//             }
//     }
//
//     return state;
// }

const reducer = combineReducers({
    form: reduxFormReducer, // mounted under "form"
    initForm
});

// const store = (window.devToolsExtension
//     ? window.devToolsExtension()(createStore)
//     : createStore)(reducer);

const store = createStore(reducer);

export default store;
