import { Router } from 'express';

import * as UserController from '../controllers/User';

const router = Router();

router.use((req, res, next) => {
  console.log('router: user');
  return next();
});

router.get('/me', UserController.getUser);

export default router;
