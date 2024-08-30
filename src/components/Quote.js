import React from 'react';
import { Link } from "react-router-dom"
import Paper from '@mui/material/Paper';
import CardContent from "@mui/material/CardContent";
import '../pages/Pages.css';

const Quote = ({children}) => {
    return (
        <div style={{width: "100%", float: "left"}}>
            <h2><i><b>{'"'}{children}{'"'}</b></i></h2>
        </div>
    );
}

export default Quote;