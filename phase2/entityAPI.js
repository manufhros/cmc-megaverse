import fetch from 'node-fetch';
import { candidateId, baseUrl } from './config.js';

export class EntityAPI {
    static async createPolyanet(row, column) {
        const response = await fetch(`${baseUrl}/polyanets`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ candidateId, row, column })
        });

        if (!response.ok) {
            throw new Error(`Failed to create Polyanet at (${row}, ${column})`);
        } else {
            console.log(`Polyanet created at (${row}, ${column})`);
        }
    }

    static async createSoloons(row, column, color) {
        const response = await fetch(`${baseUrl}/soloons`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ candidateId, row, column, color })
        });

        if (!response.ok) {
            throw new Error(`Failed to create Soloons at (${row}, ${column}) with color (${color})`);
        } else {
            console.log(`Soloons created at (${row}, ${column}) with color (${color})`);
        }
    }

    static async createCometh(row, column, direction) {
        const response = await fetch(`${baseUrl}/comeths`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ candidateId, row, column, direction })
        });

        if (!response.ok) {
            throw new Error(`Failed to create Cometh at (${row}, ${column}) with direction (${direction})`);
        } else {
            console.log(`Cometh created at (${row}, ${column}) with direction (${direction})`);
        }
    }

    static async deletePolyanet(row, column) {
        const response = await fetch(`${baseUrl}/polyanets`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ candidateId, row, column })
        });

        if (!response.ok) {
            console.error(`Failed to delete Polyanet at (${row}, ${column})`);
        } else {
            console.log(`Polyanet deleted at (${row}, ${column})`);
        }
    }

    static async deleteSoloons(row, column) {
        const response = await fetch(`${baseUrl}/soloons`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ candidateId, row, column })
        });

        if (!response.ok) {
            console.error(`Failed to delete Soloons at (${row}, ${column})`);
        } else {
            console.log(`Soloons deleted at (${row}, ${column})`);
        }
    }

    static async deleteCometh(row, column) {
        const response = await fetch(`${baseUrl}/comeths`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ candidateId, row, column })
        });

        if (!response.ok) {
            console.error(`Failed to delete Cometh at (${row}, ${column})`);
        } else {
            console.log(`Cometh deleted at (${row}, ${column})`);
        }
    }
}
