import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../model/User';

interface IUserState {
    user: User | undefined;
    isLoggedIn: boolean;
}

const initialState: IUserState = {
    user: undefined,
    isLoggedIn: false,
};

export const userSlice = createSlice({
    initialState,
    name: 'userSlice',
    reducers: {
        logout: (state) => {
            state.user = undefined;
            state.isLoggedIn = false;
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
    },
});

export const userReducer = userSlice.reducer;

export const { setUser, logout } = userSlice.actions;
