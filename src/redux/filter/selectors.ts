import { RootState } from "../store"

export const selectFilter = (state: RootState) => state.filter
export const selectFilterSortType = (state: RootState) => state.filter.sortType
