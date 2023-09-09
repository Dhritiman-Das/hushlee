"use client";

import Header from "@/components/home/general/Header";
import Sidebar from "@/components/home/general/Sidebar";
import { Box, Button } from "@mui/material";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
  // ... any other props
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Box display="flex">
        <Sidebar />
        <Box
          color="inherit"
          flex={1}
          sx={{
            marginTop: "64px",
            py: 2,
            overflowY: "auto",
            height: "calc(100vh - 64px)",

            // For WebKit browsers
            "&::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#f1f1f1",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#888",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#555",
            },

            // For Firefox
            scrollbarWidth: "thin",
            scrollbarColor: "#888 #f1f1f1",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
