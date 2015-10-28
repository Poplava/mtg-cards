import { Router } from 'express';

import * as UserController from './UserController';

export const router = Router();

router.get('/me', UserController.getUser);
