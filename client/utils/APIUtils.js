import { Schema, arrayOf, normalize } from 'normalizr';
import request from 'superagent';
import { stringify } from 'qs';

const userSchema = new Schema('users', { idAttribute: '_id' });
const cardSchema = new Schema('cards', { idAttribute: '_id' });

export function getEntitiesFromInitialState() {
  return normalize(__INITIAL_STATE, {
    user: userSchema
  });
}

export function requestCards(params) {
  return new Promise(
    (resolve, reject) =>
      request('/_/cards')
        .query(stringify(params))
        .end((err, res) => {
          if (err) {
            return reject(err);
          }

          return resolve(normalize(
            res.body,
            {
              cards: arrayOf(cardSchema)
            }
          ));
        })
  );
}
