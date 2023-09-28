import {
  AppBar,
  Box,
  Container,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Image from "next/image";
import React from "react";
import Message from "@/components/home/general/chat/Message";

function Page() {
  return (
    <Box height={"calc(100vh - 64px)"} display="flex" flexDirection="column">
      {/* Header */}
      <AppBar position="sticky">
        <Toolbar>
          <Image
            src="/path-to-your-logo.png"
            alt="Logo"
            width={40}
            height={40}
          />
          <Typography variant="h6" style={{ marginLeft: 16 }}>
            Person Name
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Chat Body */}
      <Box flexGrow={1} p={2} sx={{ overflowY: "auto" }}>
        <Message by="user" message="Hello" />
        <Message by="guest" message="Hi" />
      </Box>

      {/* Message Bar */}
      <Box
        display="flex"
        alignItems="center"
        padding={1}
        borderTop={1}
        borderColor="divider"
      >
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Type a message..."
        />
        <IconButton color="primary">
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Page;
