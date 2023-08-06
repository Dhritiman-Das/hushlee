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
  primaryBtnTxt: string;
  secondaryBtnTxt: string;
}

const GeneralModal: React.FC<GeneralModalProps> = ({
  open,
  handleClose,
  title,
  description,
  disagreeAction,
  agreeAction,
  primaryBtnTxt,
  secondaryBtnTxt,
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
        <Button onClick={disagreeAction}>{secondaryBtnTxt}</Button>
        <Button variant="contained" onClick={agreeAction} autoFocus>
          {primaryBtnTxt}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GeneralModal;
