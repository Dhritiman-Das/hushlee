"use client";

import React, { useState } from "react";
import { GiMagicHat } from "react-icons/gi";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/requests/auth/login";
import SnackBar from "@/components/general/SnackBar";
import { snackbarActions } from "@/redux/general/snackbar";
import { grey } from "@mui/material/colors";

function Page() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Reset error messages
    try {
      const response = await login({
        userName,
        password,
      });
      if (response?.status === 200) {
        router.push("/home");
      } else if (response.status === 401) {
        dispatch(
          snackbarActions.setSnackbar({
            message: "Invalid username or password",
            type: "error",
          })
        );
      }
    } catch (error: any) {
      dispatch(
        snackbarActions.setSnackbar({
          message:
            error.response?.data?.message ||
            "An unexpected error occurred. Please try again.",
          type: "error",
        })
      );
    }
  };

  return (
    <>
      <SnackBar />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        className="bg-background"
        sx={{ bgcolor: grey[300] }}
      >
        <Box
          bgcolor="bg-main"
          width={500}
          padding={3}
          borderRadius="borderRadius"
          className="text-textColor"
          sx={{ bgcolor: grey[50], borderRadius: 2 }}
        >
          <Box display="flex" alignItems="center" justifyContent="center">
            <GiMagicHat
              style={{
                fontSize: 32,
                marginRight: 8,
                transform: "rotate(-12deg)",
              }}
            />
            <Typography variant="h5" className="italic font-medium">
              Hushlee
            </Typography>
          </Box>
          <Typography variant="h4" align="center" className="font-bold my-5">
            Login
          </Typography>
          <form onSubmit={handleSubmit} autoComplete="off">
            <Box component={Grid} container direction="column" spacing={3}>
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
            </Box>
          </form>
          <Typography
            variant="body2"
            align="center"
            color="textSecondary"
            mt={2}
          >
            Don't have an account?{" "}
            <Link href="/signup">
              <span className="font-semibold hover:underline">Signup</span>
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Page;
