export interface User {
    email: string;
    password: string;
    type: UserType;
}

export enum UserType {
    SECRETARY = 'SECRETARY',
    PROFESSOR = 'PROFESSOR',
}
