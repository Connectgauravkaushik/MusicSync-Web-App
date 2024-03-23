import { createSlice } from "@reduxjs/toolkit";

const PlaylistSlice = createSlice({
    name: "playlist",
    initialState: [],
    reducers: {
        addSongs: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addSongs } = PlaylistSlice.actions;
export default PlaylistSlice.reducer;