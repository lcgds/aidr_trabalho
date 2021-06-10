/*
    "payments": [
        {
        "id": 1,
        "month": 6,
        "year": 2021,
        "value": 1500
        }
    ]
*/

export interface Payment {
    month: string;
    year: number;
    description: string;
    value: number;
    id?: number;
} 