import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const HomePage = () => {
  const isAuthenticated = localStorage.getItem('authToken');

  return (
    <Box mt={5} textAlign="center">
      <Typography variant="h4" mb={4}>
        Добро пожаловать в ONLINE LIBRARY!
      </Typography>
      <Typography variant="body1" mb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat.
      </Typography>
      {!isAuthenticated && (
        <>
          <Button variant="contained" color="primary" component={Link} to="/login" sx={{ mr: 2 }}>
            Войти
          </Button>
          <Button variant="outlined" color="primary" component={Link} to="/register">
            Зарегистрироваться
          </Button>
        </>
      )}
      <Box mt={5} position="relative">
        <img src="https://i.imgur.com/Irh7Mac.png" alt="Background" style={{ maxWidth: '100%', maxHeight: '150px', margin: 'auto' }} />
      </Box>
    </Box>
  );
};

export default HomePage;