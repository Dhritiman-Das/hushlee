import { Typography } from "@mui/material";
import React from "react";

const SetupHeader = () => {
  return (
    <div className="">
      <div className="text-center">
        <Typography variant="h4" gutterBottom sx={{ fontStyle: "italic" }}>
          Hushlee
        </Typography>
      </div>
      <div className="text-center">
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Account setup
        </Typography>
      </div>
    </div>
  );
};

export default SetupHeader;
