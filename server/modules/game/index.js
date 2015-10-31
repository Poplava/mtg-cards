import { Router } from 'express';

import * as GameController from './GameController';
import * as UserController from '../user/UserController';

export const router = Router();

router.get('/', UserController.ensureUser, GameController.list);
router.put('/', UserController.ensureAdmin, GameController.put);
