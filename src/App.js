import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const App = () => {
  const [leads, setLeads] = useState(0);
  const [sales, setSales] = useState(0);
  const [conversionRate, setConversionRate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const rate = calculateConversionRate(leads, sales);
    setConversionRate(rate);
  };

  const calculateConversionRate = (leads, sales) => {
    if (leads === 0) return 0;
    return ((sales / leads) * 100).toFixed(2);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ p: 3, mt: 5, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          Lead to Sale Conversion Calculator
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Number of Leads"
            type="number"
            value={leads}
            onChange={(e) => setLeads(e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Number of Sales"
            type="number"
            value={sales}
            onChange={(e) => setSales(e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Calculate Conversion Rate
          </Button>
        </form>
        {conversionRate !== null && (
          <Typography variant="h5" sx={{ mt: 2 }}>
            Conversion Rate: {conversionRate}%
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default App;