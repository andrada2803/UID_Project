import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { allGradesListMock, assignmentsMock} from 'src/mockData/General';
import { FilterCourse } from 'src/models/Filter';
import { Grade } from 'src/models/Grade';
import { Todo } from 'src/models/Todo';

// Define a type for the slice state
interface GeneralSliceState {
    assignments: Todo[];
    tasks: Todo[];
    allGradesList:Grade[],
    currentGradesList:Grade[],
}

// Define the initial state using that type
const initialState: GeneralSliceState = {
    assignments: assignmentsMock,
    tasks: [],
    allGradesList:allGradesListMock,
    currentGradesList:allGradesListMock
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

        

        disableRetakeForGrade: (state, action: PayloadAction<number>) => {
            state.allGradesList = state.allGradesList.map((item) => {
                if (item.key === action.payload) {
                    return { ...item, retakeActive: false };
                }
                return item;
            });

            state.currentGradesList = state.currentGradesList.map((item) => {
                if (item.key === action.payload) {
                    return { ...item, retakeActive: false };
                }
                return item;
            });

        },

        disableRequestForGrade: (state, action: PayloadAction<number>) => {
            state.allGradesList = state.allGradesList.map((item) => {
                if (item.key === action.payload) {
                    return { ...item, requestActive: false };
                }
                return item;
            });

            state.currentGradesList = state.currentGradesList.map((item) => {
                if (item.key === action.payload) {
                    return { ...item, requestActive: false };
                }
                return item;
            });
        },

        setCurrentGradesListAll: (state) => {

            state.currentGradesList = state.allGradesList
        },

        setCurrentGradesListByCourse: (state, action: PayloadAction<string>) => {

            state.currentGradesList = state.allGradesList.filter(function (item) {
                return item.courseTitle.includes(action.payload);
            });
        },

        setCurrentGradesListByCourseOrByYear: (state, action: PayloadAction<string>) => {

            state.currentGradesList = state.allGradesList.filter(function (item) {
                return (item.courseTitle.includes(action.payload) || item.year===parseInt(action.payload))
            });
        },

        setCurrentGradesListByYear: (state, action: PayloadAction<string>) => {

            state.currentGradesList = state.allGradesList.filter(function (item) {
                return item.year===parseInt(action.payload);
              });
        },

        setCurrentGradesList: (state) => {

            state.currentGradesList = state.allGradesList.filter(function (item) {
                return item.year===4;
            });
        },

        setMissedGradesList: (state) => {

            state.currentGradesList = state.allGradesList.filter(function (item) {
                return item.score<50;
            });
        },

    },
});

export const { addTask, toggleTask, toggleAssignment, disableRequestForGrade, disableRetakeForGrade, setCurrentGradesListAll,setCurrentGradesListByCourse,setCurrentGradesListByYear,setCurrentGradesList,setMissedGradesList,setCurrentGradesListByCourseOrByYear } = generalSlice.actions;

export default generalSlice.reducer;
