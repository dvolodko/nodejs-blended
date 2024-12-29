import crypto from 'crypto';
import { FIFTEEN_MIN, ONE_DAY } from '../constants/constants.js';

export const setupSession = () => {
  const accessToken = crypto.randomBytes(40).toString('base64');
  const refreshToken = crypto.randomBytes(40).toString('base64');

  return {
    accessToken,
    refreshToken,
    accessTokenValidUntil: Date.now() + FIFTEEN_MIN,
    refreshTokenValidUntil: Date.now() + ONE_DAY * 30,
  };
};
