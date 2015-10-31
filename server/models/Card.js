import mongoose, { Schema } from 'mongoose';

import * as Constants from '../../shared/Constants';

const schema = new Schema({
  _id: String,
  setCode: String,
  setName: String,
  layout: String,
  type: String,
  types: [String],
  colors: [String],
  multiverseid: Number,
  name: String,
  subtypes: [String],
  originalType: String,
  cmc: Number,
  rarity: String,
  artist: String,
  power: String,
  toughness: String,
  manaCost: String,
  text: String,
  originalText: String,
  flavor: String,
  number: String,
  rulings: [Schema.Types.Mixed],
  imageName: String,
  foreignNames: [Schema.Types.Mixed],
  legalities: [Schema.Types.Mixed],
  printings: [String],
  starter: Boolean,
  loyalty: Number,
  supertypes: [String],
  variations: [Number],
  addedOn: { type: Date, default: Date.now }
});

schema.statics.buildQuery = function(params = {}) {
  const { name, cmc, types, colors } = params;

  var conditions = [];
  var query = this.find({ multiverseid: { $gt: 0 } });

  if (name) {
    conditions.push({
      $or: [{ name: new RegExp(name, 'i') }, { 'foreignNames.language': 'Russian', 'foreignNames.name': new RegExp(name, 'i') }]
    });
  }

  if (Array.isArray(cmc) && cmc.length) {
    conditions.push({
      $or: cmc
        .filter(value => Constants.CARD_CMC.indexOf(parseInt(value)) > -1)
        .map(value => {
          value = parseInt(value);

          if (value === 6) {
            return { cmc: { $gt: value } };
          }

          return { cmc: value };
        })
    });
  }

  if (Array.isArray(types) && types.length) {
    conditions.push({
      $or: types
        .filter(value => Constants.CARD_TYPES.indexOf(value) > -1)
        .map(value => {
          return { types: value };
        })
    });
  }

  if (Array.isArray(colors) && colors.length) {
    conditions.push({
      $or: colors
        .filter(value => Constants.CARD_COLORS.indexOf(value) > -1)
        .map(value => {
          return { colors: value };
        })
    });
  }

  if (conditions.length) {
    query = query.and(conditions);
  }

  return query;
};

schema.statics.mapGames = function(cards, games) {
  return cards.map(card => {
    const game = games.find(game => {
      return game.card === card._id;
    });

    card = card.toJSON();
    card.gameTotal = game ? game.total : 0;

    return card;
  });
};

export default mongoose.model('Card', schema);
