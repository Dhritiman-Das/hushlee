"use client"

import React, { useState } from 'react';
import {GiMagicHat} from 'react-icons/gi'
import { Button, Grid, TextField, styled } from "@mui/material";
import Link from 'next/link';

const Page = () => {
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [userNameError, setUserNameError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);

    const handleSubmit = () => {
        
        // Reset error messages
        setUserNameError(null);
        setPasswordError(null);
    }

    return (
        <div className='bg-background h-screen flex items-center justify-center'>
            <div className='bg-main h-fit w-[500px] p-11 rounded-2xl text-textColor'>
                <div className='flex items-center justify-center'>
                    <GiMagicHat className='text-[32px] mr-2 transform -rotate-12' />
                    <div className='italic text-[28px] font-medium'>
                        Hushlee
                    </div>
                </div>
                <div className='text-[32px] font-bold text-center my-5'>
                    Login
                </div>
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
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                fullWidth
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <div className="text-sm mt-4 text-center text-gray-600">
                    Don&apos;t have an account?{" "}
                    <Link href={"/signup"}>
                        <span className="font-semibold hover:underline">Signup</span>
                    </Link>
                </div>
            </div>            
        </div>
    );
};

export default Page;