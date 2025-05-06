import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./Slices/employeesSlice";

const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});

export default store;
