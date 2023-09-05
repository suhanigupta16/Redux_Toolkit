import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    },
  },
});
export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

const baseUrl = process.env.REACT_APP_BASE_URL;

export function getProducts() {
  return async function getProductsThunk(dispatch, getState) {
    try {
      const data = await fetch(`${baseUrl}/products`);
      const result = await data.json();
      dispatch(fetchProducts(result?.products));
    } catch (error) {
      console.log(error, "if any");
    }
  };
}
