import { baseUrl, candidateId } from './config.js';

export class PolyanetAPI {
    constructor() {
        this.baseUrl = baseUrl;
        this.candidateId = candidateId;
    }

    async createPolyanet(row, column) {
        const response = await fetch(`${this.baseUrl}/polyanets`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                candidateId: this.candidateId,
                row: row,
                column: column
            })
        });

        if (!response.ok) {
            throw new Error(`Failed to create Polyanet at (${row}, ${column})`);
        } else {
            console.log(`Polyanet created at (${row}, ${column})`);
        }
    }
}
