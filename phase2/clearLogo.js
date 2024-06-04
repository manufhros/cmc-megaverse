import { EntityAPI } from './entityAPI.js';
import { delay } from './utils.js';
const MAP_SIZE = 30;

const clearAllLogo = async () => {
    for (let row = 0; row < MAP_SIZE; row++) {
        for (let column = 0; column < MAP_SIZE; column++) {
            await delay(500);
            await EntityAPI.deletePolyanet(row, column);
            await delay(500);
            await EntityAPI.deleteSoloons(row, column);
            await delay(500);
            await EntityAPI.deleteCometh(row, column);
        }
    }
};

// Start Cleaning the LOGO
clearAllLogo();
