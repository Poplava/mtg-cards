import { Router } from 'express';

import '../app/db';
import Card from '../models/Card';

export const router = Router();

router.get('/', getCards);

function getCards(req, res) {
  var query = Card.find({ name: /rat/i });

  query.exec((err, result) => {
    res.json(result);
  });
}
