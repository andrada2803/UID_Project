import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import generalSlice from './generalSlice';
import paymentSlice from './paymentSlice';
import settingsSlice from './settingsSlice';

export const store = configureStore({
    reducer: {
        payments: paymentSlice,
        settings: settingsSlice,
        general: generalSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
