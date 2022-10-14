import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
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

export const { getProduct, getProductSuccess, getProductFail } = productSlice.actions;
export const productSelector = state => state.product
export default productSlice.reducer

// Simulate fetch request to API

const mockAPICall = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 1000);
  });
};

const fetchData = async (data) => {
  try {
    const res = await mockAPICall(data);
  } catch (e) {
    alert("Error fetching data");
  }
}

export const fetchProductData = () => {
  return async dispatch => {
    dispatch(getProduct())

    try {
      const response = await fetchData();
      dispatch(getProductSuccess(response));
    } catch (e) {
      dispatch(getProductFail());
    }
  }
}
