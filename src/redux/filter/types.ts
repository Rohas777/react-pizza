export type FilterSortType = {
    id: number;
    name: string;
    property: 'rating' | 'price' | 'title';
    type: 'desc' | 'asc';
}

export interface FilterSliceState {
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sortType: FilterSortType;
}