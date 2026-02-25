// js/firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCn2B6CewvxGVOTz4ljFba7Xyzecm3Bu5M",
  authDomain: "fitengine-b24d4.firebaseapp.com",
  projectId: "fitengine-b24d4",
  storageBucket: "fitengine-b24d4.firebasestorage.app",
  messagingSenderId: "355203270712",
  appId: "1:355203270712:web:23bd3deaaae6c909b85fecd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);