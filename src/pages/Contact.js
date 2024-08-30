import React from 'react';
import { Link } from "react-router-dom"
import Paper from '@mui/material/Paper';
import CardContent from "@mui/material/CardContent";
import Box from '@mui/material/Box';
import PageCard from "../components/PageCards/PageCard";
import EventBind from "../components/EventBind";
export default function(nostuff) {
  return (
    <div style={{textAlign:'center'}}>
        <br></br>
        <Paper sx={{bgcolor: '#FEF1E0'}} elevation={24}>
          <header>
            <h1>Contact</h1>
          </header>
          <main>
            <p>Contact by email if there is an actual problem not just to complain. This is a one way email, that is I cannot reply so don't expect one.</p>
            <blockquote><h2>Email: inbox.twister760@passinbox.com</h2></blockquote>
            <br></br>
            <img width="50%" src="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400884.jpg" alt="Placeholder" /> 
          </main>
          <PageCard 
            source="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400884.jpg"
            title="hello world"
            text="blar, blar, blar" 
            URL="#/woke_joke"/>
          <PageCard 
            source="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400884.jpg"
            title="hello world BoB"
            text="blar, blar, blar" />
          <PageCard 
            source="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400884.jpg"
            title="hello world"
            text="blar, blar, blar" />
          <PageCard 
            source="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400884.jpg"
            title="hello world"
            text="blar, blar, blar" 
            style={{backgroundColor: "#e5e5e5"}}/>
        </Paper>
    </div>
  );
}

