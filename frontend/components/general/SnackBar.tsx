import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@mui/material';
import { RootState } from '@/redux/store';
import { snackbarActions } from '@/redux/general/snackbar';

function SnackBar() {
  const open = useSelector((state: RootState) => state.snackbar.open);
  const message = useSelector((state: RootState) => state.snackbar.message);
  const type = useSelector((state: RootState) => state.snackbar.type);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (message) {
      dispatch(snackbarActions.toggleSnackBar(true));
    }
  }, [message, dispatch]);
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(snackbarActions.toggleSnackBar(false));
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackBar;
