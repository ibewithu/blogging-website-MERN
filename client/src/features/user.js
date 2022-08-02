import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(window.localStorage.getItem('blog-user')) || { username: "", email: "", _id: "" }

export const userSlice = createSlice({
    name: "user",
    initialState: {value: initialState},
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setUser } = userSlice.actions;