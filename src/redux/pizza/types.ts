export type SearchPizzaParams = {
    sortBy: string;
    order: string;
    kind: string;
    search: string;
    currentPage: string;
}

export type Pizza = {
    id: string; 
    category: number;
    rating: number;
    imageUrl: string; 
    title: string; 
    price: number;
    sizes: number[]; 
    types: number[];
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface PizzaSliceState {
    items: Pizza[],
    status: Status;
}