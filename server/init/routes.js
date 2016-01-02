import fs from 'fs';
import path from 'path';

import { router as userRouter } from '../modules/user';

export default function(app) {
  app.use('/_/users', userRouter);

  //TODO: make 404
  app.use((req, res) => {
    fs.readFile(path.normalize(path.join(__dirname, '../../client/index.html')), 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json(err.message);
      }

      return res.send(data);
    });
  });

  app.use(/\/_.*/i, (req, res) => res.status(404).json({}));
};
