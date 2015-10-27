import { Router } from 'express';

import * as UserController from '../controllers/User';
import * as DeckController from '../controllers/Deck';

const router = Router();

router.get('/', UserController.ensureUser, DeckController.list);
router.get('/:id', UserController.ensureUser, DeckController.view);
router.post('/', UserController.ensureUser, DeckController.create);

export default router;
