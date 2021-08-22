import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function DatePicker({ value, setValue }) {
  return (
    <form noValidate>
      <TextField
        id="date"
        type="date"
        defaultValue="2021-08-23"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        style={{ width: '200px' }}
      />
    </form>
  );
}
