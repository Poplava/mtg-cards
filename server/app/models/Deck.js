import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  owner: {
    type: Number,
    ref: 'User',
    required: true
  },
  addedOn: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Deck', schema);
