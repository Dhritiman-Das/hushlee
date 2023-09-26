"use client";

import React, { useState } from "react";
import { GiMagicHat } from "react-icons/gi";
import Link from "next/link";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { signup } from "@/requests/auth/signup";
import { grey } from "@mui/material/colors";

function Page() {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [retypePassword, setRetypePassword] = useState<string>("");
  const [userNameError, setUserNameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [retypePasswordError, setRetypePasswordError] = useState<string | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Reset error messages
    setUserNameError(null);
    setPasswordError(null);
    setRetypePasswordError(null);
    if (userName === "takenusername") {
      setUserNameError("Username is already taken");
    }

    if (password !== retypePassword) {
      setPasswordError("Passwords must match");
      setRetypePasswordError("Passwords must match");
      return;
    }

    const response = await signup({
      userName,
      password,
      setError: (message: string) => setUserNameError(message),
    });
    if (response?.status === 201) {
      router.push("/setup-profile");
    }
  };
  return (
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
          Signup
        </Typography>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Box component={Grid} container direction="column" spacing={3}>
            <Grid item xs={12}>
              <TextField
                error={!!userNameError}
                helperText={userNameError}
                id="userName"
                label="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={!!passwordError}
                helperText={passwordError}
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={!!retypePasswordError}
                helperText={retypePasswordError}
                id="retypePassword"
                label="Retype Password"
                type="password"
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
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
                Signup
              </Button>
            </Grid>
          </Box>
        </form>
        <Typography variant="body2" align="center" color="textSecondary" mt={2}>
          Already have an account?{" "}
          <Link href="/login">
            <span className="font-semibold hover:underline">Login</span>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Page;
