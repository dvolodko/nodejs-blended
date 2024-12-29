import bcrypt from 'bcrypt';

import { UsersCollection } from '../db/models/Users.js';
import { SessionCollection } from '../db/models/Sessions.js';
import { setupSession } from '../utils/setupSession.js';

export const findUserByEmail = (email) => UsersCollection.findOne({ email });

export const deleteSessionByUserId = (userId) =>
  SessionCollection.findOneAndDelete({ userId });

export const createUser = async (userData) => {
  const encryptedPwd = await bcrypt.hash(userData.password, 10);

  return UsersCollection.create({
    ...userData,
    password: encryptedPwd,
  });
};

export const createSession = async (userId) => {
  const session = setupSession();

  return SessionCollection.create({
    ...session,
    userId,
  });
};

export const findSessionByToken = (token) =>
  SessionCollection.findOne({ accessToken: token });

export const findUserById = (userId) => UsersCollection.findById(userId);

export const deleteSession = (sessionId, refreshToken) =>
  SessionCollection.deleteOne({ _id: sessionId, refreshToken });
