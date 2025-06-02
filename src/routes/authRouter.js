import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  registerUserSchema,
  loginUserSchema,
  requestResetEmailSchema,
} from '../validation/auth.js';
import {
  registerUserController,
  loginUserController,
  refreshUserSessionController,
  logoutUserController,
} from '../controllers/authControllers.js';
import { validateBody } from '../middlewares/validateBody.js';
import { requestResetEmailController } from '../controllers/authControllers.js';
const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);
router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);
router.post('/refresh', ctrlWrapper(refreshUserSessionController));
router.post('/logout', ctrlWrapper(logoutUserController));

router.post(
  '/send-reset-email',
  validateBody(requestResetEmailSchema),
  ctrlWrapper(requestResetEmailController),
);
// router.post('/reset-password');
export default router;
