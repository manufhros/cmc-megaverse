import { N, STARTING_POSITION } from './config.js';

export const getPolyanetCoordinates = () => {
    let polyanetCoordinates = [];
    for (let i = STARTING_POSITION; i < N - STARTING_POSITION; i++) {
        polyanetCoordinates.push({ row: i, column: i });
        if (i !== N - i - 1) { // If we are in the center we don't push twice, but in other cases we do
            polyanetCoordinates.push({ row: i, column: N - i - 1 });
        }
    }
    return polyanetCoordinates;
};
