import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { data: [] },
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
    },
    removeUser: (state, action) => {
      state.data = state.data.filter((user) => user.email !== action.payload);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export const getData = (state) => state.user.data;

export default userSlice.reducer;
