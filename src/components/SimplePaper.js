import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const SimplePaper = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 500,
          height: 128,
        },
      }}
    >
      <Paper elevation={2} />
    </Box>
  );
}
export default SimplePaper;