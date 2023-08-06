import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { snackbarActions } from "@/redux/general/snackbar";
import { Alert } from "@mui/material";

const SnackBar = () => {
  const open = useSelector((state: RootState) => state.snackbar.open);
  const message = useSelector((state: RootState) => state.snackbar.message);
  const type = useSelector((state: RootState) => state.snackbar.type);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (message) {
      dispatch(snackbarActions.toggleSnackBar(true));
    }
  }, [message]);
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(snackbarActions.toggleSnackBar(false));
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
