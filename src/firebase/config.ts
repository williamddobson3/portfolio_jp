import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAQTc-SWJrN0J5IjCuMjZ-fYOf0plsOOmw",
  authDomain: "japanese-portfolio.firebaseapp.com",
  projectId: "japanese-portfolio",
  storageBucket: "japanese-portfolio.firebasestorage.app",
  messagingSenderId: "507077744471",
  appId: "1:507077744471:web:6d4c97a03a8b6152fa5012",
  measurementId: "G-8HCSW06LN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Realtime Database (with error handling)
let realtimeDb;
try {
  realtimeDb = getDatabase(app);
} catch (error) {
  console.warn('Realtime Database not available:', error);
  realtimeDb = null;
}
export { realtimeDb };

// Initialize Analytics (only in production)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
