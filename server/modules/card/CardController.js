import Card from '../../models/Card';
import Game from '../../models/Game';

import { LIMIT } from '../app/Constants';

export function list(req, res, next) {
  const { limit, skip } = (req.query || {});

  var query = Card
    .buildQuery(req.query);

  query
    .count()
    .then(total =>
      Promise.all([
        total,
        query
          .limit(limit || LIMIT)
          .skip(skip || 0)
          .exec('find')
      ])
    )
    .then(([total, cards]) =>
      Promise.all([
        total,
        cards,
        Game
          .findByCardsIds(cards.map(card => card._id))
          .exec()
      ])
    )
    .then(([total, cards, games]) =>
      res.json({
        total,
        cards: Card.mapGames(cards, games)
      })
    )
    .then(null, next);
}
