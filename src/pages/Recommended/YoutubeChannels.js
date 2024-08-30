import React from 'react';
import { Link } from "react-router-dom"
import Paper from '@mui/material/Paper';
import CardContent from "@mui/material/CardContent";
import '../Pages.css';
import YoutubeTabs from "../../components/Tabs/YoutubeTabs"
const YoutubeChannels = () => {
    return (
        <div className="mydiv">
            <br></br>
            <Paper sx={{bgcolor: '#FEF1E0', textAlign: "center", padding: '2px'}} elevation={24}>
                <YoutubeTabs />
            </Paper>
        </div>
    );
}

export default YoutubeChannels;