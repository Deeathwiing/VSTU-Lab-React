import React from 'react';
import Administration from './Administration';
import store from '../../../redux/store';
import {
  addItemsActionCreator,
  deleteItemsActionCreator,
} from '../../../redux/reducers/itemsReducer';
import { deleteUsersActionCreator } from '../../../redux/reducers/usersReducer';

const AdministrationContainer = () => (
  <Administration
    state={{
      items: store._state.items,
      users: store._state.users,
      NavLinkAdministration: store._state.NavLinkAdministration,
    }}
    addItemsActionCreator={addItemsActionCreator}
    deleteItemsActionCreator={deleteItemsActionCreator}
    deleteUsersActionCreator={deleteUsersActionCreator}
    dispatch={store.dispatch.bind(store)}
  />
);

export default AdministrationContainer;
