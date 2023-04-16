import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../pages/Form/formReducer';
import searchInputReducer from '../layouts/SearchBar/searchInputReducer';
import searchSubmitReducer from '../layouts/SearchBar/searchSubmitReducer';

export type RootState = ReturnType<typeof formReducer>;

const store = configureStore({
  reducer: {
    form: formReducer,
    searchInput: searchInputReducer,
    searchSubmit: searchSubmitReducer,
  },
});

export default store;
