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

export function create(req, res, next) {
  const { title } = req.body;

  Deck
    .create({
      owner: req.user._id,
      title
    })
    .then(deck => res.json(deck), next);
}

export function view(req, res, next) {
  const { id } = req.params;

  Deck
    .findById(id)
    .exec()
    .then(deck => res.json(deck), next);
}
