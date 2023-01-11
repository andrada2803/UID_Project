export interface Grade {
    key: number,
    courseTitle: string,
    gradeDate:string,
    professor:string,
    year:number,
    credits:number,
    score:number,
    maxScore:number,
    type: string,
    isReview:boolean,
    retakeActive:boolean,
    requestActive: boolean
}
