import '../app/db';
import { Schema } from 'mongoose';

import Card from '../models/Card';

import data from '../../data/json/sets/M15-x.json';

data.cards.forEach(card => {
  var model = new Card(card);
  model.setCode = data.code;
  model._id = new Schema.Types.ObjectId(card.id);
  model.save(() => {
    console.log(`Saved ${data.code} ${model.number}`);
  });
});
