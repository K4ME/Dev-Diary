import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { authetication } from "./firebase-config";
import Cookies from "js-cookie";

export function useSignInWithGithub() {
  const provider = new GithubAuthProvider();

  const signIn = async () => {
    return signInWithPopup(authetication, provider)
      .then((response) => {
        const { uid, displayName, photoURL, accessToken } = response.user;

        const user = {
          id: uid,
          name: displayName,
          avatar_url: photoURL,
        };

        Cookies.set("authToken", accessToken, { expires: 1 });
        Cookies.set("user", JSON.stringify(user), { expires: 1 });

        return user;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  };

  return { signIn };
}
