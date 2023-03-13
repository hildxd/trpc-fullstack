import { Context } from "../../server/context";
import { omit } from 'lodash'
import { User } from "@prisma/client";


export const getUserInfo = async (ctx: Context): Promise<Omit<User, 'password' | 'createdAt' | 'updatedAt'>> => {
  const user = await ctx.prisma.user.findUnique({
    where: {
      email: ctx.user!.email,
    },
  });
  return omit(user!, ['password', 'createdAt', 'updatedAt'])
}
