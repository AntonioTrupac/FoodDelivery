import {User} from "../entity/User";
import {sign} from "jsonwebtoken";

export const createAccessToken = (user: User) => {
   return sign(
      {
         userId: user.id,
         firstName: user.firstName,
         lastName: user.lastName,
         // tokenVersion: user.tokenVersion
      },
      process.env.ACCESS_TOKEN_SECRET!,
      {expiresIn: "6h"}
   )
}

export const createRefreshToken = (user: User) => {
   return sign(
      {
         userId: user.id,
         firstName: user.firstName,
         lastName: user.lastName,
         tokenVersion: user.tokenVersion
      },
      process.env.ACCESS_TOKEN_REFRESH!,
      {expiresIn: "7d"}
   )
}
