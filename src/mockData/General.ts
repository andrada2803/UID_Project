import { Grade } from 'src/models/Grade';
import { Todo } from 'src/models/Todo';

export const assignmentsMock: Todo[] = [
    {
        id: 1,
        text: 'UID Project Assignment Phase 3',
        completed: true,
    },
    {
        id: 2,
        text: 'DS Assignment 3',
        completed: false,
    },
    {
        id: 3,
        text: 'OS Project Assignment',
        completed: false,
    },
    {
        id: 4,
        text: 'PM Presentation Assignment',
        completed: true,
    },
    {
        id: 5,
        text: 'TD Project Assignment',
        completed: true,
    },
];

export const allGradesListMock: Grade[] = [
    {
        key: 1,
        courseTitle: "Special Mathematics",
        gradeDate:"12/03/2022 at 15:40PM",
        professor:"Daniela Rosca",
        year:1,
        credits:6,
        score:100,
        maxScore:100,
        type: "coloquim",
        isReview:true,
        retakeActive: true,
        requestActive:true
    },
    {
        key: 2,
        courseTitle: "Special Mathematics",
        gradeDate:"12/03/2022 at 15:40PM",
        professor:"Daniela Rosca",
        year:2,
        credits:6,
        score:60,
        maxScore:100,
        type: "exam",
        isReview:true,
        retakeActive: true,
        requestActive:true
    },
    {
        key: 3,
        courseTitle: "Special Mathematics",
        gradeDate:"12/03/2022 at 15:40PM",
        professor:"Daniela Rosca",
        year:3,
        credits:6,
        score:90,
        maxScore:100,
        type:"coloquim",
        isReview:true,
        retakeActive: true,
        requestActive:true
    },
    {
        key: 4,
        courseTitle: "Marketing",
        gradeDate:"12/03/2022 at 15:40PM",
        professor:"Daniela Rosca",
        year:4,
        credits:6,
        score:40,
        maxScore:100,
        type:"coloquim",
        isReview:true,
        retakeActive: true,
        requestActive:true
    },
    {
        key: 5,
        courseTitle: "Distributed Systems",
        gradeDate:"12/03/2022 at 15:40PM",
        professor:"Cristina Pop",
        year:4,
        credits:6,
        score:90,
        maxScore:100,
        type: "exam",
        isReview:true,
        retakeActive: true,
        requestActive:true
    },
    {
        key: 6,
        courseTitle: "Logic Design",
        gradeDate:"12/03/2022 at 15:40PM",
        professor:"Octavian Cret",
        year:1,
        credits:6,
        score:40,
        maxScore:100,
        type: "exam",
        isReview:true,
        retakeActive: true,
        requestActive:true
    },
    {
        key: 7,
        courseTitle: "Special Mathematics",
        gradeDate:"12/03/2022 at 15:40PM",
        professor:"Daniela Rosca",
        year:1,
        credits:6,
        score:45,
        maxScore:100,
        type: "exam",
        isReview:true,
        retakeActive: true,
        requestActive:true
    },
    {
        key: 8,
        courseTitle: "Digital Systems Design",
        gradeDate:"12/03/2022 at 15:40PM",
        professor:"Octavian Cret",
        year:2,
        credits:5,
        score:50,
        maxScore:100,
        type:"exam",
        isReview:true,
        retakeActive: true,
        requestActive:true
    },
    {
        key: 9,
        courseTitle: "Special Mathematics",
        gradeDate:"12/03/2022 at 15:40PM",
        professor:"Daniela Rosca",
        year:4,
        credits:6,
        score:40,
        maxScore:100,
        type:"coloquim",
        isReview:true,
        retakeActive: true,
        requestActive:true
    },
];