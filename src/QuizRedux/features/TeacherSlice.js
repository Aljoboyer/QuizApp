import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../Api/Api";
import Swal from "sweetalert2";

export const AddingQuiz = createAsyncThunk("Teacher/AddingQuiz", async (data) => {
    try {
      const response = await API.post("/teacher/AddQuiz", data);
      return response;
    } catch (err) {}
  });
  export const GetAllQuiz = createAsyncThunk("Teacher/GetAllQuiz", async (data) => {
 
    try {
      const response = await API.get("/teacher/GetAllQuiz");
      return response;
    } catch (err) {}
  });


const TeacherSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    Quizes: []
  },
  reducers: {
    // setUser: (state, action) => {
    //   state.user = action.payload;
    // },
  },
  extraReducers: {
    [AddingQuiz.fulfilled]: (state, action) => {
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    },
    [GetAllQuiz.fulfilled]: (state, action) => {
      state.Quizes = action.payload.data
    },
 
  },
});

export const { setUser, setLogout } = TeacherSlice.actions;

export default TeacherSlice.reducer;
