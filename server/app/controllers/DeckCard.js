import { Types } from 'mongoose';

import Deck from '../models/Deck';
import Card from '../models/Card';
import Game from '../models/Game';

export function list(req, res, next) {
  Deck
    .find({
      owner: req.user._id
    })
    .exec()
    .then(
      decks => res.json({
        decks,
        total: decks.length
      }),
      next
    );
}
