import {createSlice} from '@reduxjs/toolkit'

const initialState = []
  
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addItem: (state, action) => {
        const newItem = action.payload;
        const existingItem = state.find(item => item.id === newItem.id);
  
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.push({ ...newItem, quantity: 1 });
        }
      },
      remove(state,action){
        return state.filter((item) => item.id !== action.payload);
      },
      incrementQuantity: (state, action) => {
        const itemId = action.payload;
        const item = state.find(item => item.id === itemId);
        if (item) {
          item.quantity += 1;
        }
      },
      decrementQuantity: (state, action) => {
        const itemId = action.payload;
        const item = state.find(item => item.id === itemId);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        }
      },

    
}
})


export const {addItem,remove,decrementQuantity,incrementQuantity} = cartSlice.actions

export default cartSlice.reducer;