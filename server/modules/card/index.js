import { Router } from 'express';

import * as CardController from './CardController';
import * as UserController from '../user/UserController';

export const router = Router();

router.get('/', UserController.ensureUser, CardController.list);
