import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../pages/Form/formReducer';

export type RootState = ReturnType<typeof formReducer>;

const store = configureStore({
  reducer: { form: formReducer },
});

export default store;
