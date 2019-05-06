import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import userReducer from './reducers/UserReducer';
import usersReducer from './reducers/UsersReducer';
import itemsReducer from './reducers/ItemsReducer';
import { loadState, saveState } from './localStorage';
import {
  itemsHasErroredRed,
  itemsIsLoadingRed,
} from './reducers/dataReducers/dataItemsRed';
import {
  usersHasErroredRed,
  usersIsLoadingRed,
} from './reducers/dataReducers/dataUsersRed';
import {
  authorizationHasErroredRed,
  authorizationInProgressRed,
} from './reducers/dataReducers/dataUserRed';

const persistedState = loadState();

const reducers = combineReducers({
  user: userReducer,
  users: usersReducer,
  items: itemsReducer,
  itemsHasErrored: itemsHasErroredRed,
  itemsIsLoading: itemsIsLoadingRed,
  usersHasErrored: usersHasErroredRed,
  usersIsLoading: usersIsLoadingRed,
  authorizationHasErrored: authorizationHasErroredRed,
  authorizationInProgress: authorizationInProgressRed,
});

const store = createStore(
  reducers,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
