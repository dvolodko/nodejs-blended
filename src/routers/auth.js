import { Router } from 'express';

import { validateBody } from '../utils/validateBody.js';
import { userLoginShema, userRegisterShema } from '../validation/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import {
  loginUserController,
  loguotUserById,
  registerUserController,
} from '../controllers/auth.js';

const router = Router();

router.post(
  '/users/register',
  validateBody(userRegisterShema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/users/login',
  validateBody(userLoginShema),
  ctrlWrapper(loginUserController),
);

router.post('/users/logout', ctrlWrapper(loguotUserById));

export default router;
