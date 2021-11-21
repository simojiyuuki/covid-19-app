import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import dataDaily from './apiDataDaily.json';
import { fetchAsyncGetDaily } from './covid19API';

export type DATADAILY = typeof dataDaily;

type covid19State = {
  daily: DATADAILY;
  country: string;
};

const initialState: covid19State = {
  daily: dataDaily,
  country: 'Japan'
};

export const covid19Slice = createSlice({
  name: 'covid19',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAsyncGetDaily.fulfilled, (state, action) => {
      return {
        ...state,
        daily: action.payload.data,
        country: action.payload.country
      };
    });
  }
});

export const selectDaily = (state: RootState): DATADAILY => state.covid19.daily;
export const selectCountry = (state: RootState): string => state.covid19.country;

export default covid19Slice.reducer;
