import { authRouter } from '../modules/auth/auth.router';
import { userRouter } from '../modules/user/user.router';
import { router } from './trpc';

export const appRouter = router({
  auth: authRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
