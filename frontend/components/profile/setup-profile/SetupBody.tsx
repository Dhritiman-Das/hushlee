import { TextField } from "@mui/material";
import React from "react";

const SetupBody = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="">
        <TextField
          id="outlined-basic"
          label="College"
          variant="outlined"
          fullWidth
        />
      </div>
      <div className="">
        <TextField
          id="outlined-basic"
          label="Location"
          variant="outlined"
          fullWidth
        />
      </div>
      <div className="">
        <TextField
          label="Your bio"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
        />
      </div>
    </div>
  );
};

export default SetupBody;
