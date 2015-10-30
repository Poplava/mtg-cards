import { Schema, arrayOf, normalize } from 'normalizr';

const userSchema = new Schema('users', { idAttribute: '_id' });

export function getEntitiesFromInitialState() {
  return normalize(__INITIAL_STATE, {
    user: userSchema
  });
}
