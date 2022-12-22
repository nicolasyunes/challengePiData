import { configureStore } from '@reduxjs/toolkit'
import people from '../features/character/characterSlice'


export const store = configureStore({
    reducer: {
      character: people
    }
  });