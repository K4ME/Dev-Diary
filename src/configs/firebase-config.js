import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyCV-UAkyur-Njzj8hd1bve5uNNvwkLOnOQ",
  authDomain: "devdiarylogin.firebaseapp.com",
  projectId: "devdiarylogin",
  storageBucket: "devdiarylogin.appspot.com",
  messagingSenderId: "625528939562",
  appId: "1:625528939562:web:a1b3afe5c0d47321f08f53",
  measurementId: "G-C9C7EC9JKV",
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app)

export const authetication = getAuth(app);
