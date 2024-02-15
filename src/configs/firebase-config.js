import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from 'firebase/analytics'

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app)

export const authetication = getAuth(app);
