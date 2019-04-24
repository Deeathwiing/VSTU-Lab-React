import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import usersReducer from './reducers/usersReducer';
import itemsReducer from './reducers/itemsReducer';
import { itemsHasErroredRed, itemsIsLoadingRed } from './reducers/dataReducers/dataItemsRed';

const reducers = combineReducers({
  user: userReducer,
  users: usersReducer,
  items: itemsReducer,
  itemsHasErrored: itemsHasErroredRed,
  itemsIsLoading: itemsIsLoadingRed,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
