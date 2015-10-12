import { Router } from 'express';

import * as CardController from '../controllers/Card';

const router = Router();

router.use((req, res, next) => {
  return next();
});

router.get('/', CardController.requestCards);

export default router;
