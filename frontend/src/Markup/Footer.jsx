import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box
      component="footer"
      mt={5}
      p={2}
      bgcolor="primary.main"
      color="white"
      position="fixed"
      bottom={0}
      width="100%"
      textAlign="center"
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} ONLINE LIBRARY. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;