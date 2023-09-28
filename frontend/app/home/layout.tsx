"use client";

import { Box, Container } from "@mui/material";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import Header from "@/components/home/general/Header";
import Sidebar from "@/components/home/general/Sidebar";
import { RootState } from "@/redux/store";

type LayoutProps = {
  children: React.ReactNode;
  // ... any other props
};

function Layout({ children }: LayoutProps) {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const darkTheme = createTheme({
    palette: { mode: mode === "dark" ? "dark" : "light" },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Box display="flex">
        <Sidebar />
        <Box
          color="inherit"
          flex={1}
          sx={{
            marginTop: "64px",
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
    </ThemeProvider>
  );
}

export default Layout;
