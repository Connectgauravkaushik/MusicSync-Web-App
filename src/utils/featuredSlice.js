import { createSlice } from "@reduxjs/toolkit";


const FeaturedSlice = createSlice({
    name: "Featured Slice",
    initialState: null,
    reducers: {
        addFeaturedMusic: (state, action) => {
            return action.payload;
        },
        clearResults: (state, action) => {
            return null;
        }

    }
});

export const { addFeaturedMusic , clearResults} = FeaturedSlice.actions;
export default FeaturedSlice.reducer;