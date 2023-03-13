import { procedure, router } from '../../server/trpc';
import { getUserInfo } from './user.service';

export const userRouter = router({
  userInfo: procedure
    .mutation(async ({ ctx }) => getUserInfo(ctx)),
});
