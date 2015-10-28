import Card from '../../models/Card';
import Game from '../../models/Game';

import { LIMIT } from '../app/Constants';

export function list(req, res, next) {
  const { limit, skip } = req.query;

  Card
    .buildQuery(req.query)
    .select('_id')
    .exec()
    .then(cards => cards.map(card => card._id))
    .then(ids => {
      var query = Game.findByCardsIds(ids);

      query.count()
        .then(total =>
          Promise.all([
            total,
            query
              .limit(limit || LIMIT)
              .skip(skip || 0)
              .populate('card')
              .exec('find')
          ])
        )
        .then(([total, games]) => res.json({ total, games }), next);
    });
}

export function put(req, res, next) {
  const { cardId, total } = req.body;

  Card
    .findById(cardId)
    .exec()
    .then(card => {
      if (!card) {
        return Promise.reject('No card found.');
      }

      return Game
        .findOne({ card: cardId })
        .exec();
    })
    .then(game => {
      if (!game) {
        return Game.create({ card: cardId, total });
      }

      game.set('total', total);

      return game.save();
    })
    .then(game => res.json(game), next);
}
