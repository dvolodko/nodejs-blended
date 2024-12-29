import bcrypt from 'bcrypt';
import createHttpError from 'http-errors';

import {
  createSession,
  createUser,
  deleteSession,
  deleteSessionByUserId,
  findUserByEmail,
} from '../services/auth.js';
import { setupCookies } from '../utils/setupCookies.js';

export const registerUserController = async (req, res) => {
  const user = await findUserByEmail(req.body.email);

  if (user) {
    throw createHttpError(409, 'Email in use');
  }

  const newUser = await createUser(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: {
      name: newUser.name,
      email: newUser.email,
    },
  });
};

export const loginUserController = async (req, res) => {
  const user = await findUserByEmail(req.body.email);

  if (!user) {
    throw createHttpError(401, 'Email or password are wrong');
  }

  const isPwdCorrect = await bcrypt.compare(req.body.password, user.password);

  if (!isPwdCorrect) {
    throw createHttpError(401, 'Email or password are wrong');
  }

  await deleteSessionByUserId(user._id);

  const session = await createSession(user._id);

  setupCookies(session, res);

  res.json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: {
      accessToken: session.accessToken,
    },
  });
};

export const loguotUserById = async (req, res) => {
  const sessionId = req.cookies.sessionId;
  const refreshToken = req.cookies.refreshToken;

  await deleteSession(sessionId, refreshToken);

  res.clearCookie('sessionId');
  res.clearCookie('refreshToken');
  res.status(204).end();
};
