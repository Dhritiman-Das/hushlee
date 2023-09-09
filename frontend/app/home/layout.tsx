'use client';

import { Box } from '@mui/material';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '@/components/home/general/Header';
import Sidebar from '@/components/home/general/Sidebar';

type LayoutProps = {
  children: React.ReactNode;
  // ... any other props
};

function Layout({ children }: LayoutProps) {
  const darkMode = true;
  const darkTheme = createTheme({
    palette: { mode: darkMode ? 'dark' : 'light' },
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
            marginTop: '64px',
            py: 2,
            overflowY: 'auto',
            height: 'calc(100vh - 64px)',

            // For WebKit browsers
            '&::-webkit-scrollbar': {
              width: '10px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#555',
            },

            // For Firefox
            scrollbarWidth: 'thin',
            scrollbarColor: '#888 #f1f1f1',
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
