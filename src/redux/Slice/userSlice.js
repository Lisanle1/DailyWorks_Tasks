import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
      email: '',
      name: '',
      password: ''
    },
  reducers: {
    registerUser: (state, action) => {
      const {email, name, password}= action.payload;
      state.email = email;
      state.name = name;
      state.password = password;
    },
    loginUser: (state, action) => {
      const {email, password }= action.payload;
      state.email= email;
      state.password= password;
      },
    logoutUser: (state) => {
      state.email = '';
      state.name = '';
      state.password = '';
      },
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;

