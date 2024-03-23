import { createSlice } from "@reduxjs/toolkit";


const MusicCategoryItem = createSlice({
    name: "Music Item",
    initialState: null,
    reducers: {
        addMusicItems: (state, action) => {
            return action.payload;
        }
    }
});

export const { addMusicItems } = MusicCategoryItem.actions;
export default MusicCategoryItem.reducer;