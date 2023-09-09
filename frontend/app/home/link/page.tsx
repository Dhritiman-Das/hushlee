"use client";

import { Box, Button, Card, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

const Page = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4">Link</Typography>
        <Button variant="contained">New link</Button>
      </Box>
    </Container>
  );
};

export default Page;
