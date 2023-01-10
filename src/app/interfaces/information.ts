export interface Information {
    id?: string;
    name?: string;
    phone?: number;
    confirmation?: any;
    visits?: number;
    gifts?: string;
    date?: Date;
    address?: string;
    latitude?: number;
    longitude?: number;
    video?:string;
    partners?: Array<Partner>;
}

interface Partner {
    name: string;
}
