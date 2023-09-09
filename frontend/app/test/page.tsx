'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import SnackBar from '@/components/general/SnackBar';
import { snackbarActions } from '@/redux/general/snackbar';

function App() {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(
      snackbarActions.setSnackbar({ message: 'hi testing', type: 'success' }),
    );
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>Open snackbar</Button>
      <SnackBar />
    </div>
  );
}

export default App;
