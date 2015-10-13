import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  card: String,
  foo: Schema.Types.ObjectId,
  owner: Number,
  addedOn: { type: Date, default: Date.now }
});

export default mongoose.model('Game', schema);
