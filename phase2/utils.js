import fetch from 'node-fetch';
import { baseUrl, candidateId } from './config.js';

// Function to fetch goal map
export async function getGoalMap() {
    try {
        const response = await fetch(`${baseUrl}/map/${candidateId}/goal`);
        if (!response.ok) {
            throw new Error('Failed to fetch goal map');
        }
        const goalMap = await response.json();
        return goalMap; // Return the goal map array
    } catch (error) {
        console.error('Error fetching goal map:', error.message);
        return null; // Return null if fetch request fails
    }
}

// Function to set delays
export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
