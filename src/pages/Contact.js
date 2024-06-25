import React from 'react';
import { Link } from "react-router-dom"
import Paper from '@mui/material/Paper';
import CardContent from "@mui/material/CardContent";
import Box from '@mui/material/Box';
const Contact = () => {
  return (
    <div style={{textAlign:'center'}}>
        <Paper sx={{bgcolor: '#FEF1E0'}} elevation={24}>
          <header>
            <h1>Contact</h1>
          </header>
          <main>
            <p>Contact by email if there is an actual problem not just to complain. This is a one way email, that is I cannot reply so don't expect one.</p>
            <blockquote><h2>Email: inbox.twister760@passinbox.com</h2></blockquote>
            <br></br>
            <img src="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400884.jpg" alt="Placeholder" />
          </main>
        </Paper>
    </div>
  );
}

export default Contact;
