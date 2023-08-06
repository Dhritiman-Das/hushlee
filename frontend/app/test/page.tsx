"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import SnackBar from "@/components/general/SnackBar";
import { useDispatch } from "react-redux";
import { snackbarActions } from "@/redux/general/snackbar";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  const handleButtonClick = () => {
    // setSnackbarMessage("Your dynamic message here");
    // dispatch(snackbarActions.setSnackbarMessage("hi testing"));
    dispatch(
      snackbarActions.setSnackbar({ message: "hi testing", type: "success" })
    );
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>Open snackbar</Button>
      <SnackBar />
    </div>
  );
};

export default App;
