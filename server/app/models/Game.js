import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  card: String,
  owner: Number,
  addedOn: { type: Date, default: Date.now }
});

export default mongoose.model('Game', schema);
