import { router as cardsRouter } from './modules/cards';

export default app => {
  console.log('Registering modules...');

  app.use('/_/cards', cardsRouter);

  console.log('Done!');
};
