import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { students } from '../../mock/Students';
import { mockTaxes, mockTaxToStudent } from '../../mock/Taxes';
import { Person } from '../../model/Person';
import { Tax, TaxToStudent } from '../../model/Taxes';
import { User } from '../../model/User';

interface GeneralState {
    students: Person[];
    taxes: Tax[];
    taxesToStudents: TaxToStudent[];
}

const initialState: GeneralState = {
    students: students,
    taxes: mockTaxes,
    taxesToStudents: mockTaxToStudent,
};

export const generalSlice = createSlice({
    initialState,
    name: 'general',
    reducers: {
        addToStudents: (state, action: PayloadAction<Person>) => {
            state.students.push(action.payload);
        },
        addToTaxes: (state, action: PayloadAction<Tax>) => {
            state.taxes.push(action.payload);
        },
        addToTaxesToStudents: (state, action: PayloadAction<TaxToStudent>) => {
            state.taxesToStudents.push(action.payload);
        },

        removeStudent: (state, action: PayloadAction<string>) => {
            state.students = state.students.filter(
                (item) => item.id !== action.payload
            );
        },
        removeTax: (state, action: PayloadAction<string>) => {
            state.taxes = state.taxes.filter(
                (item) => item.id !== action.payload
            );
        },
        removeTaxToStudent: (
            state,
            action: PayloadAction<{ taxId: string; studentId: string }>
        ) => {
            state.taxesToStudents = state.taxesToStudents.filter(
                (item) =>
                    !(
                        item.student.id === action.payload.studentId &&
                        item.tax.id === action.payload.taxId
                    )
            );
        },

        updateStudent: (state, action: PayloadAction<Person>) => {
            state.students = state.students.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, ...action.payload };
                }

                return item;
            });
        },
        updateTax: (state, action: PayloadAction<Tax>) => {
            // action.payload

            console.log(
                '🚀 ~ file: generalSlice.ts:78 ~ action.payload',
                action.payload
            );
            console.log(
                '🚀 ~ file: generalSlice.ts:81 ~ state.taxes=state.taxes.map ~ state.taxes',
                state.taxes
            );

            state.taxes = state.taxes.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, ...action.payload };
                }

                return item;
            });
        },
        updateTaxToStudent: (state, action: PayloadAction<TaxToStudent>) => {
            state.taxesToStudents = state.taxesToStudents.map((item) => {
                if (
                    item.tax.id === action.payload.tax.id &&
                    item.student.id === action.payload.student.id
                ) {
                    return { ...item, ...action.payload };
                }

                return item;
            });
        },
    },
});

export const generalReducer = generalSlice.reducer;

export const {
    addToStudents,
    addToTaxes,
    addToTaxesToStudents,
    removeStudent,
    removeTax,
    removeTaxToStudent,
    updateStudent,
    updateTax,
    updateTaxToStudent,
} = generalSlice.actions;
