import { createSlice } from "@reduxjs/toolkit";


const accessTokenSlice = createSlice({
    name: "access Token",
    initialState: null,
    reducers: {
        addAccessToken: (state, action) => {
            return action.payload;
        },
        removeAccessToken: (state, action) => {
            return null;
        }
    }
});

export const { addAccessToken, removeAccessToken } = accessTokenSlice.actions;
export default accessTokenSlice.reducer;