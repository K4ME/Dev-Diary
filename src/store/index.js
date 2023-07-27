import { create } from 'zustand'

const useUserStore = create(set => ({
  user: {
    id: '',
    name: '',
    avatar_url: ''
  },
  sign_in: newUser => set(() => ({ user: newUser })),
  sign_out: newUser => set(() => ({ user: newUser }))
}))

export default useUserStore
