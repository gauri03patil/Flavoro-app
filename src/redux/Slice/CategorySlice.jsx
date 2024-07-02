// import {createSlice} from '@reduxjs/toolkit';


// const CateGorySlice = createSlice({
//     name: "category",
//     initialState:{
//         category: "All",
//     },
//     reducers:{
//         setCategory: (state, action) => {
//             state.category = action.payload;
//         },
//     },
// });


// export const {setCategory} = CategorySlice.actions;
// export default CateGorySlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    category: "All",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = CategorySlice.actions;
export default CategorySlice.reducer;