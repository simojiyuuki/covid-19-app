import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Props = {
  label?: string;
  minWidth?: number;
  items: string[];
  onChange: (event: SelectChangeEvent) => void;
};

const SelectBox: React.FC<Props> = ({ label, minWidth = 200, items = [], onChange }: Props) => {
  const [text, setText] = useState('japan');

  const handleChange = (event: SelectChangeEvent) => {
    setText(event.target.value);
    onChange(event);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: minWidth }}>
        <InputLabel>{label}</InputLabel>
        <Select label={label} value={text} onChange={e => handleChange(e)}>
          {items.map((item, i) => (
            <MenuItem key={i} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectBox;
