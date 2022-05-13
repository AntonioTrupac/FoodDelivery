import create from "zustand";
import {Restaurant, SearchQuery} from "../generated";


export const useSearch = create((set) => {
    return ({
        search: [] as Restaurant[],
        setRestaurantPayload: (payload: SearchQuery) => set(payload)
    });
})