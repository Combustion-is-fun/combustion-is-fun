import React from 'react';
import { Link } from "react-router-dom"
import Paper from '@mui/material/Paper';
import CardContent from "@mui/material/CardContent";
import Box from '@mui/material/Box';
import './Pages.css';
import MyMaths from "../components/MyMaths";



const About = () => {
  return (
    <div className="mydiv">
        <br></br>
        <Paper sx={{bgcolor: '#FEF1E0', textAlign: "center", fontFamily: "Times New Roman, Times, serif"}} elevation={24}>
          <header>
            <h1>About</h1>
          </header>
          <main>
            <img style={{ width: '50%', height: "auto" }} src="https://d3bkbkx82g74b8.cloudfront.net/eyJidWNrZXQiOiJsYWJyb290cy1hc3NldHMiLCJrZXkiOiJfcHVibGljXC9fZmlsZXNcL3N5c3RlbVwvY2tcL3RyZW5kaW5nXC9GRUFUVVJFRCBJTUFHRV84OWNkNDcyNTA5YjNjZjE0ZTA3MDZmOTYzZjY5NjNiZi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE0MDAsImZpdCI6ImNvdmVyIn19fQ==" />
            <h2>What is this place?</h2>
            <p>This started as a tiny side project website made with Docsify. Docsify turns markdown text into html. However, I migrated the project to react, a javascript library to increase the user experience.</p>
            <p></p>
            <h2>Why that name?</h2>
            <p>The name is a meme. Once upon a time, one person knew a definition when others didn't and pronounced "Combustion is fun!". It's a metaphor for knowledge about the world we live in.</p>
            <h2>Values</h2>
            <p>Truth and freedom including freedom of speech.</p>
            <p>Creation started 29/12/2023</p>
            
          </main>
        </Paper>
    </div>
  );
}

export default About;