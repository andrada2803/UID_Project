import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { assignmentsMock } from 'src/mockData/General';
import { Todo } from 'src/models/Todo';

// Define a type for the slice state
interface GeneralSliceState {
    assignments: Todo[];
    tasks: Todo[];
}

// Define the initial state using that type
const initialState: GeneralSliceState = {
    assignments: assignmentsMock,
    tasks: [],
};

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Todo>) => {
            state.tasks.push(action.payload);
        },
        toggleTask: (state, action: PayloadAction<number | string>) => {
            state.tasks = state.tasks.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, completed: !item.completed };
                }

                return item;
            });
        },

        toggleAssignment: (state, action: PayloadAction<number | string>) => {
            state.assignments = state.assignments.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, completed: !item.completed };
                }

                return item;
            });
        },
    },
});

export const { addTask, toggleTask, toggleAssignment } = generalSlice.actions;

export default generalSlice.reducer;
