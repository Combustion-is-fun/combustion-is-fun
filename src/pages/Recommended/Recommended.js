import React from 'react';
import { Link } from "react-router-dom"
import Paper from '@mui/material/Paper';
import CardContent from "@mui/material/CardContent";
import '../Pages.css';

const Recommended = () => {
    return (
        <div className="mydiv">
            <h1>Recommended</h1>
            <h2>Recommended Websites</h2>
            <h2>Recommended Reading</h2>
            <Link to="/YoutubeChannels" >Recommended Youtube Channels</Link>
        </div>
    );
}

export default Recommended;
