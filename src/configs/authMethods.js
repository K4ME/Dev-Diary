import { signInWithPopup, GithubAuthProvider } from 'firebase/auth'
import { authetication } from './firebase-config'

export function signInWithGithub() {
  const provider = new GithubAuthProvider()
  signInWithPopup(authetication, provider)
    .then(response => {
      console.log(response)
      console.log(response.user.displayName)
      console.log(response.user.photoURL)
      console.log(response.user.uid)
    })
    .catch(error => {
      console.log(error)
    })
}
