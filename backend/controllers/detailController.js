const { db } = require('../config/firebaseConfig');
const { baseStorageURL } = require('../config/storageConfig');

exports.detailFoodsById = async (req, res) => {
    try {
        const requestedId = parseInt(req.query.id, 10);

        console.log('Requested Food Id:', requestedId);

        if (isNaN(requestedId)) {
            console.error('Id parameter is missing or invalid.');
            return res.status(400).json({ error: 'Id parameter is required and must be a valid number.' });
        }

        console.log('Fetching document from Firestore with Id:', requestedId);

        const snapshot = await db.collection('foods').where('Id', '==', requestedId).get();

        console.log('Snapshot size:', snapshot.size);

        if (snapshot.empty) {
            console.warn(`No food found with Id: "${requestedId}".`);
            return res.status(404).json({ message: `No food found with Id: "${requestedId}".` });
        }

        console.log('Document(s) found. Preparing response data.');

        const doc = snapshot.docs[0];
        const foodData = doc.data();

        if (!foodData.URL) {
            console.warn('No URL found in the document data.');
            return res.status(500).json({ error: 'Data is missing required field: URL.' });
        }

        const imageName = foodData.URL;
        const folder = 'data-foods-img/';
        const imageUrl = `${baseStorageURL}${folder}${imageName}`;

        const responseData = {
            id: doc.id,
            ...foodData,
            imageUrl,
        };

        console.log('Response data prepared:', responseData);

        return res.status(200).json(responseData);
    } catch (error) {
        console.error('Error while fetching food details:', error.message, error.stack);
        return res.status(500).json({
            error: 'Internal server error',
            details: error.message, 
        });
    }
};
