import firebase from 'firebase/compat/app'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAING_SENDER_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

// Database instance
export const database = Firebase.firestore()

// Authentication instance
export const firebaseUI = new firebaseui.auth.AuthUI(Firebase.auth())

// FirebaseUI config.
const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: () => {},
  },
  signInOptions: [
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url/callback.
  tosUrl: () => console.log('TOS'),
  // Privacy policy url/callback.
  privacyPolicyUrl: () => console.log('Privacy Policy'),
}

// The start method will wait until the DOM is loaded.
// ui.start('#firebaseui-auth-container', uiConfig)
