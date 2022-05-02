import axios from "axios";

export const API = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://blooming-hamlet-12117.herokuapp.com",

});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/users/signin", formData);
export const studentSignup = (formValue) => API.post("/users/studentSignup", formValue);