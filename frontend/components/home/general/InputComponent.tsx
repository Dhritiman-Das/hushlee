'use client';

import {
  Box, Button, Stack, TextField, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

interface IProp {
  prop: string;
  label: string;
  value: string;
  type: 'text' | 'password'
}

function InputComponent({
  prop, label, value, type,
}: IProp) {
  const [edited, setEdited] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const toggleEdited = () => {
    setEdited(!edited);
  };
  const handleSubmit = () => {
    console.log({ [prop]: inputValue });
    toggleEdited();
  };
  return (
    <Stack direction="row" gap={2} alignItems="center" height="50px">
      <Box>
        {edited
    && <TextField variant="outlined" label={label} value={inputValue} type={type} sx={{ width: '350px' }} onChange={handleInputChange} />}
        {!edited
    && (
    <Stack direction="row" gap={2}>
      <Typography variant="h6" width="100px" gutterBottom>
        {label}
      </Typography>
      <Typography variant="h6" gutterBottom>
        :
      </Typography>
      <Typography variant="h6" width="200px" className="truncate" gutterBottom>
        {type === 'password' ? '******' : inputValue}
      </Typography>
    </Stack>
    )}
      </Box>
      <Box>
        {edited && <Button variant="contained" onClick={handleSubmit}>Save</Button>}
        {!edited && <EditIcon onClick={toggleEdited} sx={{ cursor: 'pointer' }} />}
      </Box>
    </Stack>
  );
}

export default InputComponent;
