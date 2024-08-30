import React from 'react';
import { Link } from "react-router-dom"
import Paper from '@mui/material/Paper';
import CardContent from "@mui/material/CardContent";
import "../Pages.css";
import paper from "../Pages.css";
import '../../App.css';
import Quote from "../../components/Quote";
const PolicyPrinciples = () => {
    return (
        <div className="mydiv">
            <br></br>
            <Paper  sx={{bgcolor: '#FEF1E0', textAlign: "center", padding: '2px'}} elevation={24}>
                <div style={{ overflow: "auto" }}>
                    <div className="menu">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                        <a href="#">Link 4</a>
                    </div>
            
                    <div className="main">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                            </p>
                        <div className="mycode"><h3>terminal</h3><p>pip3 install kivy<br/>pip3 install kivymd</p></div>
                    </div>

                    <div className="right">
                        <h2>About</h2>
                        <p>blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar,blar, blar, blar, blar, blar,blar, blar, blar, blar, blar,blar, blar, blar, blar, blar,blar, blar, blar, blar, blar</p>
                    </div>
                    <Quote>hello, this is a quote</Quote>
                </div>
            </Paper>
        </div>
    );
}

export default PolicyPrinciples;