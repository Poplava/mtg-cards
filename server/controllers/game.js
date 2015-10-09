import { Router } from 'express';

import '../app/db';
import Game from '../models/Game';
import Card from '../models/Card';

export const router = Router();

router.get('/', getGames);
router.post('/', createGame);

function getGames(req, res) {
  Game
    .find({})
    .populate('card')
    .exec((err, games) => {
      res.json(games);
    });
}

function createGame(req, res) {
  var game;

  Card.findById(req.body.card, (err, card) => {
    if (card) {
      game = new Game({
        card
      });

      game.save((err, game) => {
        if (err) {
          res.status(500).json();
          return;
        }

        Game
          .findById(game.id)
          .populate('card')
          .exec((err, game) => {
            res.json(game);
          });
      });
    } else {
      res.status(404).json();
    }
  });
}
