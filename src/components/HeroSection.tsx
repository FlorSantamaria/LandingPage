
import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import imagenPrincipal from "../assets/imagen-principal.jpg"

const LandingPage: React.FC = () => {
    return (
        <Container maxWidth="md" sx={{ padding: '2rem 0' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={imagenPrincipal}
                sx={{
                  width: '100%',
                  maxWidth: '300px',
                  display: 'block',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography  className={"title"}sx={{ fontFamily: 'Poppins, sans-serif',fontWeight: 600,
              marginBottom: '0.5rem', fontSize: 24 }}>
                Acompañapp
              </Typography>
              <Typography  className={"title"}sx={{ fontFamily: 'Poppins, sans-serif',fontWeight: 300,
              marginBottom: '0.5rem', fontSize: 24 }}>
                Tu apoyo en momentos difìciles
              </Typography>
            </Grid>
          </Grid>
        </Container>
      );
};

export default LandingPage;