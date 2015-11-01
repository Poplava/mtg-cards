import { createSelector } from 'reselect';

const usersByIdSelector = state => state.entities.users;
const currentUserIdSelector = state => state.app.user;

export const userSelector = createSelector(
  usersByIdSelector,
  currentUserIdSelector,
  (users, userId) => {
    return users[userId] || null;
  }
);

export const userIsAdminSelector = createSelector(
  userSelector,
  user => {
    if (!user) {
      return false;
    }

    return user.roles.indexOf('admin') > -1;
  }
);

export const userIsUserSelector = createSelector(
  userSelector,
  user => {
    if (!user) {
      return false;
    }

    return user.roles.indexOf('user') > -1;
  }
);
