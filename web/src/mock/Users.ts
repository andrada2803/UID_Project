import { User, UserType } from '../model/User';

export const authorizedUsers: User[] = [
    {
        email: 'secretary@email.com',
        password: 'password123',
        type: UserType.SECRETARY,
    },
    {
        email: 'professor@email.com',
        password: 'password123',
        type: UserType.PROFESSOR,
    },
];
