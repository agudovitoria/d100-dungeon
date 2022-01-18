import { configureStore } from '@reduxjs/toolkit';
import dungeonsSlice from '../redux/dungeons/dungeonsSlice';

export const store = configureStore({
  reducer: {
    dungeons: dungeonsSlice,
  },
});
