import { Tax, TaxPaymentStatus, TaxToStudent } from '../model/Taxes';
import { students } from './Students';

export const mockTaxes: Tax[] = [
    {
        id: '1',
        name: 'Tax 1',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec massa in augue ornare porta et in ipsum. Nullam consequat.',

        price: 20,
    },
    {
        id: '2',
        name: 'Tax 2',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec massa in augue ornare porta et in ipsum. Nullam consequat.',

        price: 66,
    },
    {
        id: '3',
        name: 'Tax 3',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec massa in augue ornare porta et in ipsum. Nullam consequat.',

        price: 62,
    },
    {
        id: '4',
        name: 'Tax 4',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec massa in augue ornare porta et in ipsum. Nullam consequat.',

        price: 90,
    },
];

export const mockTaxToStudent: TaxToStudent[] = [
    {
        tax: mockTaxes[0],
        student: students[0],
        status: TaxPaymentStatus.COMPLETE,
    },
    {
        tax: mockTaxes[1],
        student: students[1],
        status: TaxPaymentStatus.OVERDUE,
    },
    {
        tax: mockTaxes[2],
        student: students[2],
        status: TaxPaymentStatus.OVERDUE,
    },
];
