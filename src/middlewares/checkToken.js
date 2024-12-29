import createHttpError from 'http-errors';
import { findSessionByToken, findUserById } from '../services/auth.js';

export const checkToken = async (req, res, next) => {
  const accesToken = req.get('Authorization');
  if (!accesToken) {
    next(createHttpError(401, 'Not authorizated1'));
    return;
  }
  const [bearer, token] = accesToken.split(' ');

  if (bearer !== 'Bearer' || !token) {
    next(createHttpError(401, 'Not authorizated 2'));
    return;
  }
  const session = await findSessionByToken(token);

  if (!session) {
    next(createHttpError(401, 'Session not found'));
    return;
  }
  if (Date.now() > session.accessTokenValidUntil) {
    next(createHttpError(401, 'Access token expired'));
    return;
  }

  const user = await findUserById(session.userId);

  if (!user) {
    next(createHttpError(401, 'Not authorizated 3'));
    return;
  }

  req.user = user;
  next();
};
