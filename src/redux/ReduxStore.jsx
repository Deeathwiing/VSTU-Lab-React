import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import userReducer from './reducers/UserReducer';
import usersReducer from './reducers/UsersReducer';
import itemsReducer from './reducers/ItemsReducer';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const reducers = combineReducers({
  user: userReducer,
  users: usersReducer,
  items: itemsReducer,
});

// eslint-disable-next-line max-len
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
