export interface Information {
    id?: string;
    name?: string;
    phone?: number;
    confirmation?: boolean;
    visits?: number;
    gifts?: string;
    date?: Date;
    address?: string;
    partners?: Array<Partner>;
}

interface Partner {
    name: string;
}
