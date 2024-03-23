import { createSlice } from "@reduxjs/toolkit";


const SearchAlbumSlice = createSlice({
    name: "Search Album ",
    initialState: {
        addAlbumData: null,
        addTrack: null
    },
    reducers: {
        addAlbum: (state, action) => {
            state.addAlbumData = action.payload;
        },
        addTrackData: (state, action) => {
            state.addTrack = action.payload;
        },
        clearCart: (state, action) => {
            state.addAlbumData = null
            state.addTrack = null
        }
    }
});

export const { addAlbum, addTrackData, clearCart } = SearchAlbumSlice.actions;
export default SearchAlbumSlice.reducer;