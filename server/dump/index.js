import mongoose, { Schema } from 'mongoose';

import Card from '../app/models/Card';

import data from '../../data/json/sets/M15-x.json';

import { MONGO_URL } from '../config/config';

mongoose.connect(MONGO_URL);

data.cards.forEach(card => {
  var model = new Card(card);
  model.setCode = data.code;
  model._id = card.id;
  model.save(() => {
    console.log(`Saved ${data.code} ${model.number}`);
  });
});
