import { Router } from 'express';
import { MongoClient } from 'mongodb';

const dbUrl = 'mongodb://localhost:27017/mtg';

export const router = Router();

router.get('/', getCards);

const DEFAULT_QUERY = {
  number: null,
  setCode: null
};

function getCards(req, res) {
  var dbQuery = {};

  const query = Object.assign({}, DEFAULT_QUERY, req.query);

  if (query.number) {
    dbQuery.number = '' + query.number;
  }

  if (query.setCode) {
    dbQuery.setCode = '' + query.setCode;
  }

  if (query.name) {
    dbQuery.name = new RegExp(query.name, 'i');
  }

  if (query.colors) {
    query.colors = query.colors.split(',');
    dbQuery.manaCost = new RegExp('^' + query.colors.map(color => `(?=.*${color})`).join(''), 'i');
  }

  MongoClient.connect(dbUrl, (err, db) => {
    var q = db.collection('cards').find(dbQuery);

    q.count().then(total => {
      q.limit(30).toArray().then(cards => {
        db.close();
        res.json({
          total,
          cards
        });
      });
    });
  });
}
