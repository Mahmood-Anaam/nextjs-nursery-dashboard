"use client";

import {Box,Typography,Link} from '@mui/material';

export default function Footer() {
    return (
       <>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}.
      </Typography>
      </>
      
    );
  }