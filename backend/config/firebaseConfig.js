require('dotenv').config(); // Memuat variabel dari file .env
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

// Validasi variabel lingkungan
if (!process.env.FIREBASE_PROJECT_ID) throw new Error('Missing FIREBASE_PROJECT_ID. Check .env file.');
if (!process.env.FIREBASE_CLIENT_EMAIL) throw new Error('Missing FIREBASE_CLIENT_EMAIL. Check .env file.');
if (!process.env.FIREBASE_PRIVATE_KEY) throw new Error('Missing FIREBASE_PRIVATE_KEY. Check .env file.');

// Konfigurasi kredensial Firebase
const firebaseConfig = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Menangani newline dalam private key
};

// Inisialisasi Firebase
let firebaseApp;
try {
    firebaseApp = initializeApp({
        credential: cert(firebaseConfig),
    });
    console.log('Firebase initialized successfully.');
} catch (error) {
    console.error('Error initializing Firebase:', error.message);
    throw error;
}

// Inisialisasi Firestore
const db = getFirestore(firebaseApp);

// Ekspor Firebase App dan Firestore
module.exports = {
    firebaseApp,
    db,
};
