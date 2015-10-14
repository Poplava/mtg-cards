import { Types } from 'mongoose';

import Card from '../models/Card';
import Game from '../models/Game';

export function getItems(req, res) {
  var query = Card.find({});

  if (req.query.name) {
    query = query.or(
      [{ name: new RegExp(req.query.name, 'i') }]
    );
    query = query.or(
      [{ 'foreignNames.language': 'Russian', 'foreignNames.name': new RegExp(req.query.name, 'i') }]
    );
  }

  query.exec((err, cards) => {
    const ids = cards.map(card => card._id);
    var gameQuery = Game
      .find({ card: { $in: ids } })
      .populate('card owner')
      .limit(req.query.limit)
      .skip(req.query.offset);

    gameQuery.exec((err, games) => {
      gameQuery.count((err, total) => {
        res.json({
          total,
          games
        });
      });
    });
  });
}
