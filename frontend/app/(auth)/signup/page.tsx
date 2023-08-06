"use client";

import React, { useState } from "react";
import { GiMagicHat } from "react-icons/gi";
import Link from "next/link";
import { Button, Grid, TextField, styled } from "@mui/material";
import { signup } from "@/requests/auth/signup";
import { useRouter } from "next/navigation";

const Page = () => {
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
    console.log("hi");

    const response = await signup({
      userName,
      password,
      setError: (message: string) => setUserNameError(message),
    });
    console.log("hi2");
    console.log({ response });
    if (response?.status === 201) {
      router.push("/setup-profile");
    }
  };
  return (
    <div className="bg-background h-screen flex items-center justify-center">
      <div className="bg-main h-fit w-[500px] p-11 rounded-2xl text-textColor">
        <div className="flex items-center justify-center">
          <GiMagicHat className="text-4xl mr-2 transform -rotate-12" />
          <div className="italic text-3xl font-medium">Hushlee</div>
        </div>
        <div className="text-[32px] font-bold text-center my-5">Signup</div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Grid container direction="column" spacing={3}>
            <Grid item xs={12}>
              <TextField
                error={!!userNameError}
                helperText={userNameError}
                id="userName"
                key="userName"
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
                key="password"
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
                key="retypePassword"
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
          </Grid>
        </form>
        <div className="text-sm mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link href={"/login"}>
            <span className="font-semibold hover:underline">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
