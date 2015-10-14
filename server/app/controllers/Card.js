import { Types } from 'mongoose';

import Card from '../models/Card';
import Game from '../models/Game';

export function getCards(req, res) {
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
      const ids = cards.map(card => card._id);

      Game
        .find({ card: { $in: ids }})
        .exec((err, games) => {
          res.json({
            total,
            cards: cards.map(card => {
              card = card.toJSON();
              card.games = games.filter(game => {
                return game.card === card._id;
              });

              return card;
            })
          });
        });
    });
  });
}

export function postCardGame(req, res) {
  const { id } = req.params;

  Card
    .findById(id)
    .exec((err, card) => {
      if (!card) {
        return res.status(404).json({});
      }

      Game
        .create({ card: card._id }, (err, game) => {
          Card
            .findById(id)
            .exec((err, card) => {
              if (!card) {
                return res.status(404).json({});
              }

              Game
                .find({ card: id })
                .exec((err, games) => {
                  card = card.toJSON();
                  card.games = games;

                  return res.json(card);
                });
            });
        });
    });
}
