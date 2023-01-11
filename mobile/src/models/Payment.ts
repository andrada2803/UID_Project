import { DropdownItemIconType } from 'src/components/DropdownItem/DropdownItem';

export interface Payment {
    title: string;
    content: string;
    price: number;
    dueDateString: string;
    status: DropdownItemIconType;
}

export interface ServiceOption extends Pick<Payment, 'title' | 'content'> {}
