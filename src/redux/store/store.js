import { createStore, combineReducers } from 'redux';
import reducer from '../reducers/reducers';

const rootReducer = combineReducers({
  data: reducer,
});

const store = createStore(rootReducer);

export default store;















// import { createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from '../reducers/rootReducer';

// const store = configureStore({
//     reducer: rootReducer
// });
// // const store = createStore(rootReducer);

// export default store;

