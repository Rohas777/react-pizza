import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FilterSliceState, FilterSortType } from "./types"

const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    sortType: {
        id: 0,
        name: 'популярности',
        property: 'rating',
        type: 'desc'
    }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload
        },
        setSortType(state, action: PayloadAction<FilterSortType>) {
            state.sortType = action.payload
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            state.sortType = action.payload.sortType
            state.currentPage = Number(action.payload.currentPage)
            state.categoryId = Number(action.payload.categoryId)
        }
    }
})

export const { setCategoryId, setSortType, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions

export default filterSlice.reducer