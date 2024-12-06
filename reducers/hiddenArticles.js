// reducers/hiddenArticles.js
import { createSlice } from '@reduxjs/toolkit';

const hiddenArticlesSlice = createSlice({
  name: 'hiddenArticles',
  initialState: {
    value: [],
  },
  reducers: {
    hideArticle: (state, action) => {
      state.value.push(action.payload);
    },
    showAllArticles: (state) => {
      state.value = [];
    },
  },
});

export const { hideArticle, showAllArticles } = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;
