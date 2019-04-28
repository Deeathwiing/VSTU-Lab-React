import { createStore, combineReducers, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import usersReducer from './reducers/usersReducer';
import itemsReducer from './reducers/itemsReducer';
// eslint-disable-next-line max-len
import {
  itemsHasErroredRed,
  itemsIsLoadingRed,
} from './reducers/dataReducers/dataItemsRed';

const reducers = combineReducers({
  user: userReducer,
  users: usersReducer,
  items: itemsReducer,
  itemsHasErrored: itemsHasErroredRed,
  itemsIsLoading: itemsIsLoadingRed,
});

// eslint-disable-next-line max-len
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
