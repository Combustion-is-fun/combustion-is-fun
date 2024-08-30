import React from 'react';
import Paper from '@mui/material/Paper';
import CardContent from "@mui/material/CardContent";
import Container from '@mui/material/Container';


const Diversity = () => {

  return (
    <div style={{padding: 10, Spacing: 2, textAlign:'center'}}>
      <br></br>
      <Paper sx={{bgcolor: '#FEF1E0'}} elevation={24}>
        <header>
              <h1>Diversity, Inclusion, Equity</h1>
        </header>
            <h2></h2>
            <div>
                <img style={{ width: '50%', height: "auto" }} src="https://i.makeagif.com/media/7-03-2018/oPPhdD.gif" />
            </div>
            <Container>
                <img style={{ width: '70%', height: "auto" }} src="https://media.tenor.com/41cQ5mDZpREAAAAi/come-on-youre-kidding-right.gif" />
            </Container>
      </Paper>      
    </div>
  );
}

export default Diversity;