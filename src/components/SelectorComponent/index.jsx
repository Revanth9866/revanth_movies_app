import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { setSelectedGenre, setSelectedRating } from '../../slice/movieSlice';

export default function SelectorComponent({ name, value,type }) {
  const [selectedValue, setSelected] = React.useState('');

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const selected = event.target.value;
    setSelected(selected);

    if (type === 'rating') {
      dispatch(setSelectedRating(selected === 'ALL' ? '' : selected));
    } else {
      dispatch(setSelectedGenre(selected === 'ALL' ? '' : selected));
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label={name}
          onChange={handleChange}
        >
          <MenuItem value="ALL">All</MenuItem>
          {
            value?.length > 0 && value.map(item => <MenuItem value={item}  >{item}</MenuItem>)
          }
        </Select>
      </FormControl>
    </Box>
  );
}