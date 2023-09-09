import { Box, Button } from '@mui/material';
import React from 'react';

function Page() {
  return (
    <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button>Save</Button>
    </Box>
  );
}

export default Page;
