import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  card: { type: Schema.Types.ObjectId, ref: 'Card' }
});

export default mongoose.model('Game', schema);
