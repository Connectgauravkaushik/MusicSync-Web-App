import { createSlice } from "@reduxjs/toolkit";


const ItemsByIdSlice = createSlice({
    name: "ItemsById",
    initialState: null,
    reducers: {
        addMusicAlbum: (state, action) => {
            return action.payload;
        },
        clearData:()=> {
            return null;
        }
    }
});

export const { addMusicAlbum , clearData } = ItemsByIdSlice.actions;
export default ItemsByIdSlice.reducer;