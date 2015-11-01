import { createSelector } from 'reselect';

const cardsByIdSelector = state => state.entities.cards;
const cardListIdsSelector = state => state.cardList.cards;

export const cardListSelector = createSelector(
  cardsByIdSelector,
  cardListIdsSelector,
  (cards = [], ids = []) => {
    return ids.map(id => cards[id])
  }
);
