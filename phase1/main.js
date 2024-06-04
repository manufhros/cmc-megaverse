import { PolyanetAPI } from './polyanetAPI.js';
import { getPolyanetCoordinates } from './utils.js';

const createPolyanetsInXShape = async () => {
    const polyanetAPI = new PolyanetAPI();
    const polyanetCoordinates = getPolyanetCoordinates();
    for (const { row, column } of polyanetCoordinates) {
        await polyanetAPI.createPolyanet(row, column);
    }
};

// Start creating the Polyanets
createPolyanetsInXShape();
