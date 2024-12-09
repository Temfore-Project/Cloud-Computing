const { getStorage } = require('firebase-admin/storage');

// Konfigurasi untuk bucket Cloud Storage
const bucketName = 'temforeapp-storage';
const baseStorageURL = `https://storage.googleapis.com/${bucketName}/`;

const storage = getStorage();

module.exports = {
    storage,
    bucketName,
    baseStorageURL,
};
