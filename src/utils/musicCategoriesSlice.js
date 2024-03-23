import { createSlice } from "@reduxjs/toolkit";


const MusicCategoriesSlice = createSlice({
    name: "categories",
    initialState: null,
    reducers: {
        addMusicCategories: (state, action) => {
            return action.payload;
        },
        clearCart:(state,action)=> {
           return null;
        }
    }
});

export const { addMusicCategories , clearCart } = MusicCategoriesSlice.actions;
export default MusicCategoriesSlice.reducer;