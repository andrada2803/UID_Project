import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { services, taxes } from 'src/mockData/Taxes';
import { Payment, ServiceOption } from 'src/models/Payment';

// Define a type for the slice state
interface SettingsSliceState {
    payment: {
        cardNumber: string;
        date: string;
        cvv: string;
    };
}

// Define the initial state using that type
const initialState: SettingsSliceState = {
    payment: {
        cardNumber: '',
        date: '',
        cvv: '',
    },
};

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        updatePayment: (
            state,
            action: PayloadAction<SettingsSliceState['payment']>
        ) => {
            state.payment = { ...state.payment, ...action.payload };
        },
    },
});

export const { updatePayment } = settingsSlice.actions;

export default settingsSlice.reducer;
