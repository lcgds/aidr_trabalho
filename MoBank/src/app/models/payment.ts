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
    id?: number;
    month: number;
    year: number;
    value: number;
} 