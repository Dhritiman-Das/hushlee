import Sidebar from "@/components/home/general/chat/Sidebar";
import { Box, Container } from "@mui/material";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
  // ... any other props
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Box display="flex">
      <Sidebar />
      <Box color="inherit" flex={1}>
        {children}
      </Box>
    </Box>
  );
}
