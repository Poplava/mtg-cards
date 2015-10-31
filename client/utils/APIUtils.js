import assign from 'lodash/object/assign';
import { Schema, arrayOf, normalize } from 'normalizr';
import request from 'superagent';
import { stringify } from 'qs';

const userSchema = new Schema('users', { idAttribute: '_id' });
const cardSchema = new Schema('cards', { idAttribute: '_id' });
const gameSchema = new Schema('games', { idAttribute: '_id' });

export function getEntitiesFromInitialState() {
  return normalize(__INITIAL_STATE, {
    user: userSchema
  });
}

export function requestCards(params) {
  return new Promise(
    (resolve, reject) =>
      request('/_/cards')
        .query(stringify(params, { arrayFormat: 'brackets' }))
        .end((err, res) => {
          if (err) {
            return reject(err);
          }

          return resolve(
            normalize(res.body, { cards: arrayOf(cardSchema) })
          );
        })
  );
}

export function putGame(card, total) {
  return new Promise(
    (resolve, reject) =>
      request.put('/_/games')
        .send({
          cardId: card._id,
          total
        })
        .end((err, res) => {
          if (err) {
            return reject(err);
          }

          card = assign({}, card, {gameTotal: res.body.total});

          return resolve(
            normalize({
              card,
              game: res.body
            }, {
              card: cardSchema,
              game: gameSchema
            })
          );
        })
  );
}
