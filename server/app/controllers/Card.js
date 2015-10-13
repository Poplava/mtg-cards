import { Types } from 'mongoose';

import Card from '../models/Card';
import Game from '../models/Game';

export function requestCards(req, res) {
  var query = Card.find({});

  if (req.query.name) {
    query = query.or(
      [{ name: new RegExp(req.query.name, 'i') }]
    );
    query = query.or(
      [{ 'foreignNames.language': 'Russian', 'foreignNames.name': new RegExp(req.query.name, 'i') }]
    );
  }

  query = query.limit(req.query.limit);
  query = query.skip(req.query.offset);

  query.exec((err, cards) => {
    query.count((err, total) => {
      res.json({
        total,
        cards
      });
    });
  });
}

export function postCardGame(req, res) {
  const { id } = req.params;

  Card.findById(id).exec((err, card) => {
    if (err) {
      console.log(err);
      return res.status(500).json({});
    }

    if (!card) {
      return res.status(404).json({});
    }

    Game.create({ card: card._id }, (err, game) => {
      if (err) {
        return res.status(500).json({});
      }

      Card.findById(id).exec((err, card) => {
        if (err) {
          return res.status(500).json({});
        }

        if (!card) {
          return res.status(404).json({});
        }

        Game.find({ card: id }).exec((err, games) => {
          if (err) {
            return res.status(500).json({});
          }

          card = card.toJSON();
          card.games = games;

          return res.json(card);
        });
      });
    });
  });
}
