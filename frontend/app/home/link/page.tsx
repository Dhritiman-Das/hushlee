'use client';

import {
  Box, Button, Container, Typography,
} from '@mui/material';
import React from 'react';

function Page() {
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4">Link</Typography>
        <Button variant="contained">New link</Button>
      </Box>
    </Container>
  );
}

export default Page;
