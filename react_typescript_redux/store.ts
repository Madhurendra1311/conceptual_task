// import { createStore, combineReducers, applyMiddleware, compose } from "redux"
// import thunk from "redux-thunk";
// import addUserReducer from './reducers/addUserReducer'

// const rootReducers = combineReducers({
//   addUser: addUserReducer
// })

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunk)))

// export default store;























// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import addUserReducer from "./reducers/addUserReducer"

// declare global {
//     interface Window {
//       __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
//   }

// const rootReducer = combineReducers({ addUser: addUserReducer });

// const logger = (store: any) => (next:any) => (action:any) => {
//   console.log("logger 1 dispatching action:", action);
//   console.log("store", store);
//   return next(action);
// };

// const thunk = (args:void) => ({ getState, dispatch }: {
//     getState: any;
//     dispatch: any;
// }) => (next:any) => (action:any) => {
//   console.log("inside thunk");
//   if (typeof action === "function") {
//     return action(dispatch, getState, args);
//   }
//   return next(action);
// };

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// // @tsignore

// export const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk(), logger)));

// console.log(store.getState());

// // be careful when you use with combineReducers
// // store.subscribe(throttle(() => saveData("state", store.getState()), 1000));

