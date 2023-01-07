import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { services, taxes } from 'src/mockData/Taxes';
import { Payment, ServiceOption } from 'src/models/Payment';

// Define a type for the slice state
interface PaymentSliceState {
    taxes: Payment[];
    services: ServiceOption[];
}

// Define the initial state using that type
const initialState: PaymentSliceState = {
    taxes: taxes,
    services: services,
};

export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        addTax: (state, action: PayloadAction<Payment>) => {
            state.taxes.push(action.payload);
        },
    },
});

export const { addTax } = paymentSlice.actions;

export default paymentSlice.reducer;
