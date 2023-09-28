"use client";

import { Avatar, Box, Typography, useTheme } from "@mui/material";

interface MessageProps {
  by: "user" | "guest";
  message: string;
}

const Message: React.FC<MessageProps> = ({ by, message }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: by === "user" ? "flex-end" : "flex-start",
        mt: 2,
        mb: 2,
      }}
    >
      {by === "guest" && <Avatar alt="Guest" />}
      <Box
        sx={{
          maxWidth: "70%",
          p: 1,
          mx: 1,
          borderRadius: 2,
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          bgcolor:
            by === "user"
              ? theme.palette.mode === "dark"
                ? "primary.dark"
                : "#e6f7ff"
              : theme.palette.mode === "dark"
              ? "text.disabled"
              : "#f5f5f5",
        }}
      >
        <Typography variant="body1">{message}</Typography>
      </Box>
      {by === "user" && <Avatar alt="User" />}
    </Box>
  );
};

export default Message;
