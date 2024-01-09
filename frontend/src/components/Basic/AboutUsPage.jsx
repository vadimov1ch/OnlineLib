import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


const AboutUsPage = () => {
  return (
    <Container maxWidth="md" mt={5} textAlign="center" style={{ marginTop: '25px' }}>
      <Typography variant="h4" mb={4}>
        О нас
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros felis, cursus nec nisl sit amet, cursus vehicula ipsum. Mauris.
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis nibh tincidunt, gravida est nec, aliquam ligula. Donec rhoncus odio sem, sit amet euismod metus laoreet blandit. Pellentesque viverra mi nisl, vel posuere dui malesuada at. Donec consectetur placerat tristique. Etiam vestibulum pellentesque justo, vel mollis velit ullamcorper at. Mauris.
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et lorem blandit, suscipit odio eget, feugiat velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </Typography>
      <Box mt={5} position="relative">
        <img src="https://i.imgur.com/3F0CHV9.png" alt="Background" style={{ maxWidth: '100%', maxHeight: '150px', margin: 'auto' }} />
      </Box>
    </Container>
  );
};

export default AboutUsPage;