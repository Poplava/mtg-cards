import { Router } from 'express';

import * as UserController from '../controllers/User';
import * as CardController from '../controllers/Card';

const router = Router();

router.use((req, res, next) => {
  return next();
});

router.get('/', UserController.ensureUser, CardController.requestCards);
router.post('/:id/games', UserController.ensureAdmin, CardController.postCardGame);

export default router;
