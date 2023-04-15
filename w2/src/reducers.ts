import { createSlice } from '@reduxjs/toolkit';

// Определение начального состояния
const initialState = {
  // Инициализация состояния
};

// Создание slice с помощью createSlice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Логика обработки инкремента
    },
    decrement: (state) => {
      // Логика обработки декремента
    },
  },
});

// Экспорт действий (actions) и редюсера (reducer)
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
