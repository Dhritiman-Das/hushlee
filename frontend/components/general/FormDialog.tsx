'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface InputField {
  autoFocus?: boolean;
  margin?: 'dense' | 'none' | 'normal';
  id: string;
  label: string;
  type: string;
  variant: 'standard' | 'filled' | 'outlined';
}

interface FormDialogProps {
  title: string;
  contentText: string;
  inputs: InputField[];
  handleSubmit: () => void;
  openButtonText: string;
  cancelButtonText: string;
  submitButtonText: string;
}

export default function FormDialog({
  title,
  contentText,
  inputs,
  handleSubmit,
  openButtonText = 'Open form dialog',
  cancelButtonText = 'Cancel',
  submitButtonText = 'Submit',
}: FormDialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        {openButtonText}
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{contentText}</DialogContentText>
          {inputs.map((input) => (
            <TextField key={input.id} {...input} fullWidth />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{cancelButtonText}</Button>
          <Button
            onClick={() => {
              handleSubmit();
              handleClose();
            }}
          >
            {submitButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
