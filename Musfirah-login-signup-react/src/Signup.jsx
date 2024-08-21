import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <Container maxWidth="sm" sx={{ bgcolor: 'rgba(0, 0, 0, 0.7)', p: 3, borderRadius: 2 }}>
      <Box mt={5}>
        <Typography variant="h4" gutterBottom align="center" sx={{ color: 'white' }}>
          Signup
        </Typography>
        <form>
          <TextField 
            fullWidth 
            label="Name" 
            margin="normal" 
            variant="outlined" 
            InputLabelProps={{ style: { color: 'white' } }} 
            InputProps={{ style: { color: 'white', borderColor: 'white' } }} 
            sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', borderColor: 'white' }} 
          />
          <TextField 
            fullWidth 
            label="Phone Number" 
            margin="normal" 
            variant="outlined" 
            InputLabelProps={{ style: { color: 'white' } }} // Label color
            InputProps={{ style: { color: 'white', borderColor: 'white' } }} 
            sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', borderColor: 'white' }} 
          />
          <TextField 
            fullWidth 
            label="Email" 
            margin="normal" 
            variant="outlined" 
            InputLabelProps={{ style: { color: 'white' } }} 
            InputProps={{ style: { color: 'white', borderColor: 'white' } }} 
            sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', borderColor: 'white' }} 
          />
          <TextField 
            fullWidth
            label="Password" 
            type="password" 
            margin="normal" 
            variant="outlined" 
            InputLabelProps={{ style: { color: 'white' } }} 
            InputProps={{ style: { color: 'white', borderColor: 'white' } }} 
            sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', borderColor: 'white' }} 
          />
          <Button 
            fullWidth 
            variant="contained" 
            color="error" 
            sx={{ mt: 2, bgcolor: 'black', borderColor: 'white' }} 
          >
            Signup
          </Button>
          <Box mt={2}>
            <Typography variant="body2" align="center" sx={{ color: 'white' }}>
              Already have an account? <Link to="/login" style={{ color: '#90caf9' }}>Login</Link>
            </Typography>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default Signup;
