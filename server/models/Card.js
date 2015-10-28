import mongoose, { Schema } from 'mongoose';

const TYPES = [
  'Land',
  'Enchantment',
  'Artifact',
  'Creature',
  'Sorcery',
  'Instant'
];

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
  const { name, cmc, types } = params;

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
        .filter(value => value >=0 && value < 7)
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
        .filter(value => TYPES.indexOf(value) > -1)
        .map(value => {
          return { types: value };
        })
    });
  }

  if (conditions.length) {
    query = query.and(conditions);
  }

  return query;
};

schema.statics.mapGames = function(cards, games) {
  console.log(123);
  return cards.map(card => {
    const game = games.find(game => {
      return game.card === card._id;
    });

    card = card.toJSON();
    card.game = game;

    return card;
  });
};

export default mongoose.model('Card', schema);
