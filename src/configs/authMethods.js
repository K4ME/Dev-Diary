import { signInWithPopup, GithubAuthProvider } from 'firebase/auth'
import { authetication } from './firebase-config'
import useUserStore from '../store'

export function useSignInWithGithub() {
  const provider = new GithubAuthProvider()

  const signIn = async () => {
    return signInWithPopup(authetication, provider)
      .then(response => {
        const { uid, displayName, photoURL } = response.user

        const user = {
          id: uid,
          name: displayName,
          avatar_url: photoURL
        }

        return user
      })
      .catch(error => {
        console.log(error)
        return null
      })
  }

  return { signIn }
}
