import { createSlice } from "@reduxjs/toolkit";

const PremiumPlanSlice = createSlice({
    name: "Premium Plan",
    initialState: null,
    reducers: {
        addPremiumPlan: (state, action) => {
            return action.payload;
        },
        clearPlanCart: (state, action) => {
            return null;
        }
    }
});

export const { addPremiumPlan, clearPlanCart } = PremiumPlanSlice.actions;
export default PremiumPlanSlice.reducer;