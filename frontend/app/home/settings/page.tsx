import { Stack, Typography } from '@mui/material';
import React from 'react';
import InputComponent from '@/components/home/general/InputComponent';

function Page() {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Settings
      </Typography>
      <Stack direction="column" gap={2}>
        <InputComponent prop="userName" label="Username" value="Cooldude69a dasdasdasbdioa sdiubasd" type="text" />
        <InputComponent prop="email" label="Email" value="iamdhritiman01@gmail.com" type="text" />
        <InputComponent prop="password" label="Password" value="Cooldude69" type="password" />
      </Stack>
    </>
  );
}

export default Page;
