const igdbService = require('../utils/igdbService');

async function fetchAndSaveGameData(req, res) {
    try {
        const gameDataFromAPI = await igdbService.fetchGameData(); // Assuming this function fetches game data from IGDB API
        await igdbService.saveGamesToDatabase(gameDataFromAPI); // Assuming this function saves game data to the database
        res.status(200).send('Game data saved to database successfully.');
    } catch (error) {
        console.error('Error fetching and saving game data:', error);
        res.status(500).send('An error occurred while fetching and saving game data.');
    }
}

module.exports = { fetchAndSaveGameData };