import { Typography } from "@mui/material";
import React from "react";
import { GiMagicHat } from "react-icons/gi";

const GeneralLoading = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-violet-500 to-blue-600">
      <div className="text-white flex flex-col gap-5">
        <div className="flex justify-center">
          <GiMagicHat className="text-[72px] mr-2 transform -rotate-12 " />
        </div>
        <Typography variant="h5" gutterBottom>
          The Hushlee app
        </Typography>
      </div>
    </div>
  );
};

export default GeneralLoading;
