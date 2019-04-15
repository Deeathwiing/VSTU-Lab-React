import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import usersReducer from './reducers/usersReducer';
import itemsReducer from './reducers/itemsReducer';

const reducers = combineReducers({
  user: userReducer,
  users: usersReducer,
  items: itemsReducer,
});

const store = createStore(reducers);

export default store;
