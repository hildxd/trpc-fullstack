import storage from '@utils/storage'
import { RouterInput, trpc } from '@utils/trpc'
import { configureAuth } from 'react-query-auth'

const signMutation = trpc.auth.signIn.useMutation({
  onSuccess({ accessToken }) {
    storage.setToken(accessToken)
  }
})

const userMutation = trpc.user.userInfo.useMutation()

const { } = configureAuth({
  loginFn: async ({ email, password }: RouterInput['auth']['signIn']) => {
    await signMutation.mutateAsync({ email, password })
    return signMutation.data
  },
  registerFn: async ({ email, password }: RouterInput['auth']['signIn']) => {
    await signMutation.mutateAsync({ email, password })
    return signMutation.data
  },
  userFn: async () => {
    await userMutation.mutateAsync()
    return userMutation.data
  },
  logoutFn: () => Promise.resolve(null),
})
