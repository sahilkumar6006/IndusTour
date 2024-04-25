import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 0,
}


 const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  

  //actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, actions) => {
        state.value = actions.payload;
    },
  }
}) 


//now we are exporting

export const {increment,decrement,incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;