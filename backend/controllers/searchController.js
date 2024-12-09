const { db } = require('../config/firebaseConfig'); 
const { baseStorageURL } = require('../config/storageConfig');

exports.searchFoodsByTitle = async (req, res) => {
    try {
        const title = decodeURIComponent(req.query.title).toLowerCase();

        console.log('Decoded Title:', title); 

        if (!title) {
            console.error('Title parameter is missing.');
            return res.status(400).json({ error: 'Title parameter is required.' });
        }

        console.log('Fetching all documents from Firestore...');

        const snapshot = await db.collection('foods').get();

        console.log('Firestore query completed. Snapshot size:', snapshot.size);

        if (snapshot.empty) {
            console.warn('No data found in the foods collection.');
            return res.status(404).json({ message: 'No foods found in the collection.' });
        }

        const filteredFoods = [];
        snapshot.forEach((doc) => {
            const foodData = doc.data();
            const foodTitle = foodData.Title?.toLowerCase();

            if (foodTitle && foodTitle.includes(title)) {
                console.log(`Found match: ${foodData.Title}`);
                const imageName = foodData.URL;
                const folder = 'data-foods-img/';
                const imageUrl = `${baseStorageURL}${folder}${imageName}`;

                filteredFoods.push({
                    id: doc.id,
                    ...foodData,
                    imageUrl,
                });
            }
        });

        if (filteredFoods.length === 0) {
            console.warn(`No matching foods found for Title containing: "${title}".`);
            return res.status(404).json({ message: `No foods found with Title containing: "${title}".` });
        }

        console.log('Response data prepared:', filteredFoods);
        return res.status(200).json(filteredFoods);
    } catch (error) {
        console.error('Error while searching foods:', error.message, error.stack);
        return res.status(500).json({
            error: 'Internal server error',
            details: error.message, 
        });
    }
};
