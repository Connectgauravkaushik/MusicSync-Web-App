import { createSlice } from "@reduxjs/toolkit";


const PlayingSongSlice = createSlice({
    name: "playing Songs",
    initialState: null,
    reducers: {
        addPlayingSongs: (state, action) => {
            return action.payload;
        }
    }

});

export const { addPlayingSongs } = PlayingSongSlice.actions;
export default PlayingSongSlice.reducer;