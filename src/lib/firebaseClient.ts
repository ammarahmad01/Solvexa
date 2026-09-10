import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCEJQ4ep2NDhYrlaFi8bmNtJ0xbD4njAoI",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "solvexa-bbff1.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "solvexa-bbff1",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "solvexa-bbff1.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "218708995888",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:218708995888:web:3bea7681e3d757645d62f5",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const clientAuth: Auth = getAuth(app);
export default app;
