import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  card: { type: String, ref: 'Card' },
  owner: { type: Number, ref: 'User' },
  addedOn: { type: Date, default: Date.now }
});

export default mongoose.model('Game', schema);
