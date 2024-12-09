const axios = require("axios");
const { db } = require('../config/firebaseConfig');
const { baseStorageURL } = require('../config/storageConfig');

const recipeApiUrl = process.env.RECIPE_API_URL;

const getRecommendations = async (req, res) => {
    try {
        const { CategoryUser, TempUser, TimeUser } = req.query;

        if (!CategoryUser || !TempUser || !TimeUser) {
            return res.status(400).json({ error: "Parameter CategoryUser, TempUser, dan TimeUser diperlukan." });
        }

        const apiResponse = await axios.get(`${recipeApiUrl}/recommend`, {
            params: { CategoryUser, TempUser, TimeUser },
        });

        const recommendations = apiResponse.data?.recommendations;

        if (!Array.isArray(recommendations) || recommendations.length === 0) {
            console.warn("API tidak mengembalikan rekomendasi.");
            return res.status(404).json({ message: "Tidak ada rekomendasi ditemukan." });
        }

        console.log("Rekomendasi diterima:", recommendations);

        const snapshotPromises = recommendations.map(async (rec) => {
            const snapshot = await db.collection('foods').where('Id', '==', rec.Id).get();

            if (!snapshot.empty) {
                const doc = snapshot.docs[0];
                const foodData = doc.data();

                if (!foodData.URL) {
                    console.warn(`Dokumen dengan Id "${rec.Id}" tidak memiliki URL.`);
                    return null;
                }

                const imageName = foodData.URL;
                const folder = 'data-foods-img/';
                const imageUrl = `${baseStorageURL}${folder}${imageName}`;

                return {
                    id: doc.id,
                    ...foodData,
                    imageUrl,
                };
            } else {
                console.warn(`Tidak ada dokumen ditemukan untuk Id: "${rec.Id}".`);
                return null;
            }
        });

        const results = await Promise.all(snapshotPromises);

        const filteredResults = results.filter((result) => result !== null);

        if (filteredResults.length === 0) {
            return res.status(404).json({ message: "Tidak ada data ditemukan untuk rekomendasi Id." });
        }

        res.status(200).json(filteredResults);
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
        res.status(500).json({ error: "Terjadi kesalahan saat memproses permintaan." });
    }
};

module.exports = { getRecommendations };
