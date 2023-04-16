import { createSlice } from '@reduxjs/toolkit';

const searchSubmitReducer = createSlice({
  name: 'searchSubmited',
  initialState: '',
  reducers: {
    setSubmited: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setSubmited } = searchSubmitReducer.actions;
export default searchSubmitReducer.reducer;
