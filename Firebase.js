import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
// Add the analytics import:
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhQZQrzex4mZ1JNmCp9YBluGevtPQnR5Y",
  authDomain: "symptom-checklist.firebaseapp.com",
  projectId: "symptom-checklist",
  storageBucket: "symptom-checklist.firebasestorage.app",
  messagingSenderId: "70372218409",
  appId: "1:70372218409:web:f208770a6ab493ee2feea8",
  measurementId: "G-VHOGH1ECWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, db, analytics };
