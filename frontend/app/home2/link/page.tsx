import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";
import React from "react";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

const Page = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4">Link</Typography>
        <Button variant="contained">New link</Button>
        <AccessibilityIcon />
      </Box>
    </Container>
  );
};

export default Page;
