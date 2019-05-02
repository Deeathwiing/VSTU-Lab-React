import { createStore, combineReducers, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './reducers/UserReducer';
import usersReducer from './reducers/UsersReducer';
import itemsReducer from './reducers/ItemsReducer';
// eslint-disable-next-line max-len

const reducers = combineReducers({
  user: userReducer,
  users: usersReducer,
  items: itemsReducer,
});

// eslint-disable-next-line max-len
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
