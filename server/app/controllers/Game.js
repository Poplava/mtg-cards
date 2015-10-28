import { Types } from 'mongoose';

import Card from '../models/Card';
import Game from '../models/Game';

const TYPES = [
  'Land',
  'Enchantment',
  'Artifact',
  'Creature',
  'Sorcery',
  'Instant'
];

export function list(req, res, next) {
  const {
    limit,
    skip
    } = req.query;

  Card
    .buildQuery(req.query)
    .select('_id')
    .exec()
    .then(
      cards => cards.map(card => card._id)
    )
    .then(cardsIds => {
        var query = Game
          .find({ card: { $in: cardsIds }})
          .limit(limit || 10)
          .skip(skip || 0)
          .populate('card');

        query
          .exec()
          .then(
            games => Promise.all([games, query.count()])
          )
          .then(
            ([games, total]) => {
              res.json({games, total});
            },
            next
          );
      },
      next
    );
}

export function put(req, res, next) {
  const { card, total } = req.body;

  Card
    .findById(card)
    .exec()
    .then(_card => {
      if (!_card) {
        return Promise.reject('No card found.');
      }

      return Game
        .findOne({ card: card })
        .exec();
    })
    .then(_game => {
      if (!_game) {
        return Game.create({ card: card });
      }

      _game.set('total', total);

      return _game.save();
    })
    .then(_game => {
      res.json(_game);
    })
    .then(null, err => next(err));
}
