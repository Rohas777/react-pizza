import { createAsyncThunk } from "@reduxjs/toolkit"
import { Pizza, SearchPizzaParams } from "./types"
import axios from "axios"

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    'pizza/fetchPizzasStatus',
    async (urlParams ) => {
        const {sortBy, order, kind, search, currentPage} = urlParams
        const { data } = await axios.get<Pizza[]>
            (`https://64874035beba6297279053e8.mockapi.io/pizza?page=${currentPage}&limit=8&${kind}&sortBy=${sortBy}&order=${order}&search=${search}`)
        
        return data
    }
)