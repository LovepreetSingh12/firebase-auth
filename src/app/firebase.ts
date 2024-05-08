import firebase, { initializeApp } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDujxizQshS0p7rTk2xr88mLNOoVv-z_wU",
    authDomain: "reepe-auth.firebaseapp.com",
    projectId: "reepe-auth",
    storageBucket: "reepe-auth.appspot.com",
    messagingSenderId: "761892415053",
    appId: "1:761892415053:web:1b64abd68171b6f59e1e04",
    measurementId: "G-70F3YQ3QFC"
};

const app = initializeApp(firebaseConfig);

export {app};