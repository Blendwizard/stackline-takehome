import { createSlice } from "@reduxjs/toolkit";
import mock_api_response from "../../data/mock_api";

export const initialState = {
  loading: true,
  hasError: false,
  data: []
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct: (state) => {
      state.loading = true;
    },
    getProductSuccess: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.hasError = false;
    },
    getProductFail: (state, action) => {
      state.loading = false;
      state.hasError = true;
    }
  }
})


// Simulate a delayed fetch request
const mockAPICall = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 1000);
  });
};

const fetchData = async (data) => {
  try {
    const res = await mockAPICall(data);
    return res[0];
  } catch (e) {
    alert("Error fetching data");
  }
}

// Actual thunk for getting product data
export const fetchProductData = () => {
  return async dispatch => {
    dispatch(getProduct())

    try {
      const response = await fetchData(mock_api_response);
      dispatch(getProductSuccess(response));
    } catch (e) {
      dispatch(getProductFail());
    }
  }
}

export const { getProduct, getProductSuccess, getProductFail } = productSlice.actions;
export const productSelector = state => state.product
export default productSlice.reducer
