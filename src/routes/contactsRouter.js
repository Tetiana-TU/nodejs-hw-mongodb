import express from 'express';
import {
  getContactsController,
  handleGetContactById,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contactsControllers.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema } from '../validation/contactsValidation.js';
import { isValidId } from '../middlewares/isValidId.js';
import { updateContactSchema } from '../validation/contactsValidation.js';
import { authenticate } from '../middlewares/authenticate.js';
import { upload } from '../middlewares/multer.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constants/roles.js';
const router = express.Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getContactsController));
router.get('/:contactId', isValidId, ctrlWrapper(handleGetContactById));
router.post(
  '/',
  checkRoles(ROLES.TEACHER),
  upload.single('photo'),
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.patch(
  '/:contactId',
  checkRoles(ROLES.TEACHER, ROLES.PARENT, ROLES.ADMIN),
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);
router.patch(
  '/:contactId/photo',
  checkRoles(ROLES.TEACHER, ROLES.PARENT, ROLES.ADMIN),
  isValidId,
  upload.single('photo'),
  patchContactController,
);
router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));

export default router;
