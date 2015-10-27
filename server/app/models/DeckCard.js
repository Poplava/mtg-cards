import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  deck: {
    type: Schema.Types.ObjectId,
    ref: 'Deck',
    required: true
  },
  card: {
    type: String,
    ref: 'Card',
    required: true
  },
  total: Number,
  addedOn: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('DeckCard', schema);
