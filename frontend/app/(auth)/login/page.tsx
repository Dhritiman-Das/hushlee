'use client';

import React, { useState } from 'react';
import { GiMagicHat } from 'react-icons/gi';
import {
  Button, Grid, TextField,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { login } from '@/requests/auth/login';
import SnackBar from '@/components/general/SnackBar';
import { snackbarActions } from '@/redux/general/snackbar';

function Page() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Reset error messages
    try {
      const response = await login({
        userName,
        password,
      });
      if (response?.status === 200) {
        router.push('/home');
      } else if (response.status === 401) {
        dispatch(
          snackbarActions.setSnackbar({
            message: 'Invalid username or password',
            type: 'error',
          }),
        );
      }
    } catch (error: any) {
      dispatch(
        snackbarActions.setSnackbar({
          message: error.response?.data?.message || 'An unexpected error occurred. Please try again.',
          type: 'error',
        }),
      );
    }
  };

  return (
    <>
      <SnackBar />
      <div className="bg-background h-screen flex items-center justify-center">
        <div className="bg-main h-fit w-[500px] p-11 rounded-2xl text-textColor">
          <div className="flex items-center justify-center">
            <GiMagicHat className="text-[32px] mr-2 transform -rotate-12" />
            <div className="italic text-[28px] font-medium">Hushlee</div>
          </div>
          <div className="text-[32px] font-bold text-center my-5">Login</div>
          <form onSubmit={handleSubmit} autoComplete="off">
            <Grid container direction="column" spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="userName"
                  key="userName"
                  label="Username"
                  autoComplete="off"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  key="password"
                  label="Password"
                  type="password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
          <div className="text-sm mt-4 text-center text-gray-600">
            Don&apos;t have an account?
            {' '}
            <Link href="/signup">
              <span className="font-semibold hover:underline">Signup</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
