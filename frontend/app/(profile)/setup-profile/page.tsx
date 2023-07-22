import SetupBody from "@/components/profile/setup-profile/SetupBody";
import SetupFooter from "@/components/profile/setup-profile/SetupFooter";
import SetupHeader from "@/components/profile/setup-profile/SetupHeader";
import { Button, TextField, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-screen bg-background flex justify-center items-center">
      <div className="w-[500px] bg-main rounded-xl text-textColor px-7 py-5">
        <SetupHeader />
        <SetupBody />
        <SetupFooter />
      </div>
    </div>
  );
};

export default page;
