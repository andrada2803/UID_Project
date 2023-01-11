import { Person } from './Person';

export interface Tax {
    id: string;
    name: string;
    description: string;
    price: number;
}

export interface TaxToStudent {
    tax: Tax;
    student: Person;
    status: TaxPaymentStatus;
}

export enum TaxPaymentStatus {
    PENDING = 'PENDING',
    COMPLETE = 'COMPLETE',
    OVERDUE = 'OVERDUE',
}
