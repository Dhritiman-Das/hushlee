import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

interface GeneralModalProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  description: string;
  disagreeAction: () => void;
  agreeAction: () => void;
}

const GeneralModal: React.FC<GeneralModalProps> = ({
  open,
  handleClose,
  title,
  description,
  disagreeAction,
  agreeAction,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={disagreeAction}>Disagree</Button>
        <Button onClick={agreeAction} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GeneralModal;
