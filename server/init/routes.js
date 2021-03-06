import fs from 'fs';
import path from 'path';

import { router as userRouter } from '../modules/user';
import { router as cardRouter } from '../modules/card';
import { router as gameRouter } from '../modules/game';

export default function() {
  this.use('/_/users', userRouter);
  this.use('/_/cards', cardRouter);
  this.use('/_/games', gameRouter);

  //TODO: make 404
  this.use((req, res) => {
    fs.readFile(path.normalize(path.join(__dirname, '../../client/index.html')), 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json(err.message);
      }

      return res.send(data.replace('#{INITIAL_STATE}', JSON.stringify({ user: req.user || null })));
    });
  });

  this.use(/\/_.*/i, (req, res) => res.status(404).json({}));
};
