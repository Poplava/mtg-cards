import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  card: { type: String, ref: 'Card' }
});

export default mongoose.model('Game', schema);
