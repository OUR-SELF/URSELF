import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const SelectMenu = ({ value, setValue }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl style={{ width: '200px' }}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={handleChange}
      >
        <MenuItem value={'game'}>게임/엔터테인먼트</MenuItem>
        <MenuItem value={'food'}>푸드/리빙</MenuItem>
        <MenuItem value={'fashion'}>패션/잡화</MenuItem>
        <MenuItem value={'tech'}>테크/가전</MenuItem>
        <MenuItem value={'etc'}>기타</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectMenu;
