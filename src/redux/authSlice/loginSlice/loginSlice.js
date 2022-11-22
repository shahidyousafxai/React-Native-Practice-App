import {
    createSlice,
    createAsyncThunk,
  } from '@reduxjs/toolkit';
  import {
    logInApi,
  } from '../../../services/api/methods/login';
  import Toast from "react-native-toast-message";

  export const postLogin = createAsyncThunk(
    'post/register',
    async (payload) => {
      try {
        const response = await registerUserApi(payload);
        const data = response?.data;
        return data;
      } catch (err) {
      console.log("Logout", err)
      }
    },
  );


  const registerSlice = createSlice({
    name: 'register',
    initialState: {
      userData: null,
      error: '',
    },
    reducers: {
      postValidUserName(state, action) {
        state.userValid = action.payload;
      },
    },
    extraReducers: {
      [postRegister.fulfilled]: (state, action) => {
        state.userData = action.payload;
      },
      [postRegister.pending]: (state, action) => {
        state.loading = true;
      },
      [postRegister.rejected]: (state, action) => {
        Toast.show({
          type: 'error',
          text1: 'Warning',
          text2: action?.error?.message,
        });
      },
    },
  });
  
  export const { logOut } = registerSlice.actions;
  export default registerSlice.reducer;




  