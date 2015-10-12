import Card from '../models/Card';

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
