import { EntityAPI } from './entityAPI.js';
import { getGoalMap, delay } from './utils.js';
import { UP_COMETH, DOWN_COMETH, RIGHT_COMETH, LEFT_COMETH, POLYANET, WHITE_SOLOON, BLUE_SOLOON, RED_SOLOON, PURPLE_SOLOON } from './entityTypes.js';

const createPolyanetsInCrossmintLogo = async () => {
    try {
        // Call getGoalMap() and wait for the ACK to resolve
        const goalMapResp = await getGoalMap();

        // Check if the goalMapResp is not null and assign it to an array
        if (goalMapResp !== null) {
            const goalMap = goalMapResp.goal;

            for (let row = 0; row < goalMap.length; row++) {
                for (let column = 0; column < goalMap[row].length; column++) {
                    const entity = goalMap[row][column];
                    switch (entity) {
                        case UP_COMETH:
                            await delay(1000);
                            await EntityAPI.createCometh(row, column, 'up');
                            break;
                        case DOWN_COMETH:
                            await delay(1000);
                            await EntityAPI.createCometh(row, column, 'down');
                            break;
                        case RIGHT_COMETH:
                            await delay(1000);
                            await EntityAPI.createCometh(row, column, 'right');
                            break;
                        case LEFT_COMETH:
                            await delay(1000);
                            await EntityAPI.createCometh(row, column, 'left');
                            break;
                        case POLYANET:
                            await delay(1000);
                            await EntityAPI.createPolyanet(row, column);
                            break;
                        case WHITE_SOLOON:
                            await delay(1000);
                            await EntityAPI.createSoloons(row, column, 'white');
                            break;
                        case BLUE_SOLOON:
                            await delay(1000);
                            await EntityAPI.createSoloons(row, column, 'blue');
                            break;
                        case PURPLE_SOLOON:
                            await delay(1000);
                            await EntityAPI.createSoloons(row, column, 'purple');
                            break;
                        case RED_SOLOON:
                            await delay(1000);
                            await EntityAPI.createSoloons(row, column, 'red');
                            break;
                    }
                }
            }
        } else {
            console.error('The result of getGoalMap() is null.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

// Start creating the LOGO
createPolyanetsInCrossmintLogo();
