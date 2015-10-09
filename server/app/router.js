import path from 'path';
import { router as cardRouter } from '../controllers/card';
import { router as gameRouter } from '../controllers/game';

export default app => {
  console.log('Registering modules...');

  app.use('/_/cards', cardRouter);
  app.use('/_/games', gameRouter);

  app.use((req, res) => {
    res.sendFile(path.normalize(__dirname + '/../../client/index.html'));
  });

  console.log('Done!');
};
