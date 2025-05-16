import { createSlice } from "@reduxjs/toolkit";

const initialState = []; // stock la list des employés

// création du slice pr gérer les employées
const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload); // add employee
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
