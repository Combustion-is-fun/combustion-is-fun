import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const SimplePaper = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 1000,
        },
      }}
    >
      <Paper sx={{bgcolor: '#FEF1E0'}} elevation={24}>
        <Typography variant="h5">Hello world!!</Typography>
        <Typography variant="p">This is a piece of paper!</Typography>
      </Paper>
    </Box>
  );
}
export default SimplePaper;