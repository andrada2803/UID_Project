import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersMock } from 'src/mockData/Auth';
import { User } from 'src/models/User';

// Define a type for the slice state
interface AuthSliceState {
    users: User[];
    currentLoggedInUser: User;
}

// Define the initial state using that type
const initialState: AuthSliceState = {
    users: usersMock,
    currentLoggedInUser: {
        email:"",
        password:"",
        fullName:""
    },
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
        },
        setCurrentUser: (state, action: PayloadAction<User>) => {
            state.currentLoggedInUser = action.payload;
        },
        logOutUser: (state) => {
            state.currentLoggedInUser = {
                email:"",
                password:"",
                fullName:""
            };
        },
    },
});

export const { addUser, setCurrentUser, logOutUser } = authSlice.actions;

export default authSlice.reducer;
