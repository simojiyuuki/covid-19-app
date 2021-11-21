import React from 'react';
import SelectBox from '../../../uiParts/select-box/SelectBox';
import { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { fetchAsyncGetDaily } from '../../../../stores/slices/covid19/covid19API';

const countrys = [
  'japan',
  'us',
  'germany',
  'india',
  'france',
  'italy',
  'spain',
  'russia',
  'brazil',
  'taiwan',
  'thailand',
  'new zealand',
  'sweden'
];

const SwitchCountry: React.FC = () => {
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(fetchAsyncGetDaily(event.target.value));
  };

  return (
    <>
      <SelectBox label={'Country'} items={countrys} onChange={handleChange} />
    </>
  );
};

export default SwitchCountry;
