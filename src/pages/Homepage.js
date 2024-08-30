/////////////////////////////////////////////////////////////////////////////////
// React / functional stuff
//////////////////////////////////////////////////////////////
import React from 'react';
import { Link } from "react-router-dom";
import './Pages.css';
import landingpage from "../resources/combustion-is-fun.png";
/////////////////////////////////////////
// MUI components
///////////////////////////////////////////////

import Paper from '@mui/material/Paper';
import CardContent from "@mui/material/CardContent";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
////////////////////////////////////////////////
import HomeTabs from "../components/Tabs/HomeTabs";
import MediaCard from "../components/Lizard";
import PageCard from "../components/PageCards/PageCard";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////// Function
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let width = window.screen.width;
const HomePage = () => {
    return (
        <div style={{padding: "-2px"}}>
            <div className="showoff">
                <br/>
                <h1>Combustion is fun!</h1>
            </div>
            <div className="mydiv">
                <br></br>
                <Paper sx={{bgcolor: '#FEF1E0', textAlign: "center", padding: '2px'}} elevation={24}>
                    <header><h1 style={{fontFamily: "Times New Roman, Times, serif"}}>Ye Olde Home Page</h1></header>
                    <br></br>
                    <div style={{ overflow: "auto" }}>
                        <div className="menu">
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                          <a href="#">Link 3</a>
                          <a href="#">Link 4</a>
                        </div>
            
                        <div className="main">
                            <Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                            </Typography>
                        </div>

                        <div className="right">
                            <h2>About</h2>
                            <p>This is a place for curious people. 
                             I am just writing articles about things I like, am passionate about and have learnt. 
                            I hope to help the academics and students after me.</p>
                        </div>
                    </div>
                    <div className="flexbox"><HomeTabs /></div>
                    <div className="flexbox" style={{padding: "5px", spacing: "5px"}}>
                    </div>
                    <div>
                        <PageCard 
                            title="Interesting Bytes"
                            source="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400884.jpg"
                            text="Articals for students on coding apps, Mathematics, Physics, Chemistry and more."
                            URL="#/interesting_bytes"
                            mystyle={{backgroundColor: "White"}}/>
                        <PageCard 
                            title="Interesting Bytes"
                            source="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400884.jpg"
                            text="Articals for students on coding apps, Mathematics, Physics, Chemistry and more."
                            URL="#/interesting_bytes"
                            mystyle={{backgroundColor: "Wheat"}}/>                    
                        <PageCard 
                            title="Interesting Bytes"
                            source="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400884.jpg"
                            text="Articals for students on coding apps, Mathematics, Physics, Chemistry and more."
                            URL="#/interesting_bytes"
                            mystyle={{backgroundColor: "#e5e5e5"}}/>                                
                        <PageCard 
                            title="Interesting Bytes"
                            source="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400884.jpg"
                            text="Articals for students on coding apps, Mathematics, Physics, Chemistry and more."
                            URL="#/interesting_bytes"
                            mystyle={{backgroundColor: "BurlyWood"}}/>                                       
                                
                    </div>
                </Paper>
            </div>
        </div>
    );
}

export default HomePage;


