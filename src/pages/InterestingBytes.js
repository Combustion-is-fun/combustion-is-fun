import React from 'react';
import div from './Pages.css';
import MyTabs from '../components/MyTabs'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import CardContent from "@mui/material/CardContent";


/////////////////////////////////////////////////////////////////////////////////////////////////
// Function
/////////////////////////////////////////////////////////////////////////////////////////////////

const InterestingBytes = () => {
  return (
    <div classname={div} style={{textAlign:'center'}}>
        <Paper sx={{bgcolor: '#FEF1E0'}} elevation={24}>
          <header>
            <h1>InterestingBytes</h1>
          </header>
          <main>
    
            <MyTabs />
          </main>
        </Paper>
    </div>
  );
}

export default InterestingBytes;
