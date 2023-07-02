
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyCc8bHcRcqCORep-mBcrTQbKcl2xDpKL-E",
  authDomain: "my-second-project-af4fd.firebaseapp.com",
  projectId: "my-second-project-af4fd",
  storageBucket: "my-second-project-af4fd.appspot.com",
  messagingSenderId: "153871914398",
  appId: "1:153871914398:web:42ec024e6aac998380b28f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}