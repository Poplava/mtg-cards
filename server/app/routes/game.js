import { Router } from 'express';

import * as UserController from '../controllers/User';
import * as GameController from '../controllers/Game';

const router = Router();

router.use((req, res, next) => {
  return next();
});

router.put('/', UserController.ensureAdmin, GameController.put);

export default router;
