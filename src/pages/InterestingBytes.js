import React from 'react';
import div from './Pages.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import CardContent from "@mui/material/CardContent";
import TabsComponent from "../components/Tabs/TabsComponent";

/////////////////////////////////////////////////////////////////////////////////////////////////
// Function
/////////////////////////////////////////////////////////////////////////////////////////////////

const InterestingBytes = () => {
  return (
    <div className="mydiv" style={{textAlign:'center'}}>
        <br />
        <Paper sx={{bgcolor: '#FEF1E0'}} elevation={24}>
          <header>
            <h1>Interesting Bytes</h1>
          </header>
          <h2 style={{fontFamily: "luminari, fantasy"}}>Scroll to explore.</h2>
          <main>
            <TabsComponent />
          </main>
        </Paper>
    </div>
  );
}

export default InterestingBytes;
