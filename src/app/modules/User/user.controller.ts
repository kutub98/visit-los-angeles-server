// import httpStatus from 'http-status';
// import catchAsync from '../../utils/catchAsync';
// import sendResponse from '../../utils/sendResponse';
// import { UserService } from './user.service';

// const createUser = catchAsync(async (req, res) => {
//   const result = await UserService.createUser(req.body);

//   sendResponse(res, {
//     statusCode: httpStatus.CREATED,
//     success: true,
//     message: 'User is created succesfully',
//     data: result,
//   });
// });

// const findUserById = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const result = await UserService.findUserById(id);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'User is retrieved succesfully',
//     data: result,
//   });
// });

// const getAllUsers = catchAsync(async (req, res) => {
//   const result = await UserService.getAllUsers(req.query);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Users are retrieved succesfully',
//     meta: result.meta,
//     data: result.data,
//   });
// });

// const updateUserById = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const result = await UserService.updateUserById(id, req.body);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'User is updated succesfully',
//     data: result,
//   });
// });

// const deleteUserById = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const result = await UserService.deleteUserById(id);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'User is deleted succesfully',
//     data: result && null,
//   });
// });

// export const UserController = {
//   createUser,
//   findUserById,
//   getAllUsers,
//   updateUserById,
//   deleteUserById,
// };


// controllers/user.controller.ts
import { Request, Response } from 'express';
import { UserService } from './user.service';

type ErrorWithMessage = {
  message: string;
};

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

 const getUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};


// const getAllUsers = catchAsync(async (req, res) => {
//   const result = await UserService.getAllUsers(req.query);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Users are retrieved succesfully',
//     meta: result.meta,
//     data: result.data,
//   });
// });

 const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  } catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const updateUserDetails = async (req: Request, res: Response) => {
  try {
    const updatedUser = await UserService.updateUser(req.params.id, req.body);
    if (!updatedUser) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(updatedUser);
  } catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const removeUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await UserService.deleteUser(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

export const UserController = {
  getUser,
  getUsers,
  updateUserDetails,
  removeUser,
};