import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../pages/Form/formReducer';
import searchInputReducer from '../layouts/SearchBar/searchInputReducer';
import searchSubmitReducer from '../layouts/SearchBar/searchSubmitReducer';
import photoApiSlice from '../api/flickr';

export type RootState = ReturnType<typeof formReducer>;

const store = configureStore({
  reducer: {
    form: formReducer,
    searchInput: searchInputReducer,
    searchSubmit: searchSubmitReducer,
    photoApi: photoApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(photoApiSlice.middleware),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
middleware: (getDefaultMiddleware: () => any[]) =>
  getDefaultMiddleware().concat(photoApiSlice.middleware);

export default store;
