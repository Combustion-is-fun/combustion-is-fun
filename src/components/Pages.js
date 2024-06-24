import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const MyPages = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 2,
          height: 128,
        },
      }}
    >
      <Paper elevation={5} />
    </Box>
  );
}
export default MyPages;