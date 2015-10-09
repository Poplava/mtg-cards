import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  _id: Schema.Types.ObjectId,
  setCode: String,
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
  variations: [Number]
});

export default mongoose.model('Card', schema);
