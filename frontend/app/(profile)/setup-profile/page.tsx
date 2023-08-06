"use client";

import React, { useState } from "react";
import { GiMagicHat } from "react-icons/gi";
import { Avatar, Button, Grid, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import Setup1 from "@/components/profile/Setup1";
import Setup2 from "@/components/profile/Setup2";
import { useAppSelector } from "@/redux/store";
import GeneralModal from "@/components/general/GeneralModal";

interface BubbleProps {
  $filled: boolean;
}

const Bubble = styled(Avatar)<BubbleProps>(({ theme, $filled }) => ({
  backgroundImage: $filled
    ? "linear-gradient(to right, #F8BBD0, #F48FB1)"
    : "linear-gradient(to right, #D9D9D9, #BDBDBD)",
  color: $filled
    ? theme.palette.primary.contrastText
    : theme.palette.primary.main,
  width: theme.spacing(3),
  height: theme.spacing(3),
  marginRight: theme.spacing(1),
  border: `1px solid ${theme.palette.primary.main}`,
}));

const Page = () => {
  const setupData = useAppSelector((state) => state.profileSetup.value);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    console.log("Agree clicked");
    handleClose();
  };

  const handleDisagree = () => {
    console.log("Disagree clicked");
    handleClose();
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div className="bg-main h-fit w-[500px] p-11 rounded-2xl text-textColor">
        <div className="flex items-center justify-center">
          <GiMagicHat className="text-[32px] mr-2 transform -rotate-12" />
          <div className="italic text-[28px] font-medium">Hushlee</div>
        </div>
        <div className="text-[32px] font-bold text-center mt-5 mb-3">
          Profile Setup
        </div>
        <div className="flex items-center justify-center mb-11">
          <Bubble $filled={setupData.page === (1 as any)}> </Bubble>
          <span className="ml-6" />
          <Bubble $filled={setupData.page === (2 as any)}> </Bubble>
        </div>
        <form>{setupData.page === 1 ? <Setup1 /> : <Setup2 />}</form>
        <Grid item xs={12} sx={{ textAlign: "right", marginTop: "15px" }}>
          <Button variant="text" onClick={handleClickOpen}>
            Skip profile setup
          </Button>
          <GeneralModal
            open={open}
            handleClose={handleClose}
            title={"Skip profile setup?"}
            description={
              "Profile setup helps us suggest you better people to talk to. Also some conversation might require profile setup"
            }
            agreeAction={handleAgree}
            disagreeAction={handleDisagree}
          />
        </Grid>
      </div>
    </div>
  );
};

export default Page;
