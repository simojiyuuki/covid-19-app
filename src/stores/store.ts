import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './slices/counter/counterSlice';
import covid19Reducer from './slices/covid19/covid19Slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    covid19: covid19Reducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
