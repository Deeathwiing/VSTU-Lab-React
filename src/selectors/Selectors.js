import { createSelectorCreator } from 'reselect';

const { createSelector } = createSelectorCreator;

export const itemsSelector = state => state.items;
export const usersSelector = state => state.users;
export const usersLengthSelector = state => state.users.length;
export const userSelector = state => state.user;
export const usersHasErrored = state => state.usersHasErrored;
