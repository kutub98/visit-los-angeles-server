// import express from 'express';
// import validateRequest from '../../middlewares/validateRequest';
// import { UserController } from './user.controller';

// const router = express.Router();

// router.post(
//   '/',
//   validateRequest(createUserValidationSchema),
//   UserController.createUser,
// );

// router.get('/', UserController.getAllUsers);

// router.get('/:id', UserController.findUserById);

// router.patch(
//   '/:id',
//   validateRequest(updateUserValidationSchema),
//   UserController.updateUserById,
// );

// router.delete('/:id', UserController.deleteUserById);

// export const UserRoutes = router;

// routes/user.routes.ts

import { Router } from 'express';
import { UserController } from './user.controller';
import { userValidate } from './user.validation';
const router = Router();

router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUser);
router.put(
  '/:id',
  userValidate.validateUpdateUser,
  UserController.updateUserDetails,
);
router.delete('/:id', UserController.removeUser);

export const UserRoutes = router;
