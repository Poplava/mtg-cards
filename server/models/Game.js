import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  card: { type: String, ref: 'Card' },
  total: { type: Number, default: 1 },
  addedOn: { type: Date, default: Date.now }
});

schema.statics.findByCardsIds = function(ids) {
  return this.find({
    card: {
      $in: ids
    }
  });
};

export default mongoose.model('Game', schema);
