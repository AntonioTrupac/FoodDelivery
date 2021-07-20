import { v4 } from 'uuid';
// import { redis } from '../redis';
// import { confirmUserPrefix } from '../modules/constants/redisPrefixes';
//
// export const createConfirmationUrl = async (userId: number) => {
//    const token = v4();
//    await redis.set(confirmUserPrefix + token, userId, 'ex', 60 * 60 * 24); // 1 day expiration
//    console.log("REDIS TOKEN " , token);
//    return `http://localhost:3000/user/confirm/${token}`;
// };
