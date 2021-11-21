import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import dataDaily from './apiDataDaily.json';

type DATADAILY = typeof dataDaily;
const apiUrl = 'https://api.covid19api.com/total/country';

export const fetchAsyncGetDaily = createAsyncThunk('covid19/getDaily', async (country: string) => {
  const { data } = await axios.get<DATADAILY>(`${apiUrl}/${country}`);
  return { data: data, country: country };
});
