import { createSlice } from "@reduxjs/toolkit";

const storedCompanyId = localStorage.getItem("companyId");
const initialState = {
  id: storedCompanyId ? storedCompanyId : null,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    saveCompanyId(state, action) {
      state.id = action.payload;
      localStorage.setItem("companyId", action.payload);
    },
    removeCompanyId(state) {
      state.user = null;
      localStorage.removeItem("companyId");
    },
  },
});

export const { saveCompanyId, removeCompanyId } = companySlice.actions;

export default companySlice.reducer;
