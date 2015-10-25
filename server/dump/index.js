import mongoose, { Schema } from 'mongoose';

import Card from '../app/models/Card';

import dataList from '../../data/json/AllSets-x.json';

import { MONGO_URL } from '../config/config';

mongoose.connect(MONGO_URL);

console.log(Object.keys(dataList));

Object.keys(dataList).forEach(function(setName) {
  const data = dataList[setName];

  data.cards.forEach(card => {
    var model = new Card(card);
    model.setCode = data.code;
    model.setName = data.setName;
    model._id = card.id;
    model.save(() => {
      //console.log(`Saved ${data.code} ${model.number}`);
    });
  });

  console.log(setName + ' done.');
});

