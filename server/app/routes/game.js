import { Router } from 'express';

import * as UserController from '../controllers/User';
import * as GameController from '../controllers/Game';

const router = Router();

router.use((req, res, next) => {
  return next();
});

router.post('/', UserController.ensureAdmin, GameController.post);

export default router;
