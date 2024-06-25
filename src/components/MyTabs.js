import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ClassNameConfigurator } from '@mui/base/utils/ClassNameConfigurator'
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <ClassNameConfigurator disableDefaultClasses>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item 4" {...a11yProps(3)} />
            </Tabs>
        </ClassNameConfigurator>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item hello
      </CustomTabPanel>
    </Box>
  );
}






























/*
import React, { useState, useEffect, useRef } from 'react';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab } from '@mui/base/Tab';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { styled } from '@mui/system';








export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const refContainer = useRef();


  return (
    <Box ref={refContainer} sx={{ alignItems: "center" }} style={{
                                                                flexDirection: "column", 
                                                                alignItems: "center"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={true}
        scrollButtons="auto"
        aria-label="scrollable auto tabs example">
        <TabList>
        <Tab label="Item One" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item Two" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item Three" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item Four" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item Five" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item Six" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item Seven" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item One" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item Two" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item Three" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item Four" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item Five" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item Six" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item Seven" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item One" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item Two" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item Three" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item Four" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item Five" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item Six" sx={{ minWidth: "fit-content", flex: 1 }} />
        <Tab label="Item Seven" sx={{ minWidth: "fit-content", flex: 1 }} />
        </TabList>
        
      </Tabs>
    </Box>
  );
}







// My imports




  return (
    <Box sx={{ flexGrow: 1, }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        sx={{[`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}>
        <TabsList>
            <Tab>Interesting Bytes</Tab>
            <Tab>Maths</Tab>
            <Tab>Physics</Tab>
            <Tab>Chemistry</Tab>
            <Tab>Biology</Tab>
            <Tab>Python</Tab>
            <Tab>Github</Tab>
            <Tab>Recommendations</Tab>
            <Tab>Cool things</Tab>
            <Tab>Chemistry</Tab>
            <Tab>Biology</Tab>
            <Tab>Python</Tab>
            <Tab>Github</Tab>
            <Tab>Recommendations</Tab>
            <Tab>Cool things</Tab>
        </TabsList>
        <TabPanel value={0}>First page</TabPanel>
        <TabPanel value={1}>Second page</TabPanel>
        <TabPanel value={2}>Third page</TabPanel>
        <TabPanel value={3}>Third page</TabPanel>
        <TabPanel value={4}>Third page</TabPanel>
        <TabPanel value={5}>Third page</TabPanel>
        <TabPanel value={6}>Third page</TabPanel>
      </Tabs>
    </Box>
  );
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  line-height: 1.5;
  margin: 3px;
  padding: 4px 6px;
  border: none;
  border-radius: 1px;
  display: flex;
  justify-content: center;

  &:hover {
    color: #fff;
    background-color: ${blue[400]};
  }

  &:focus {
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  background-color: ${blue[900]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.4)' : 'rgba(0,0,0, 0.2)'
  };
  `,
);

///////////////////////////////////////////////////////////////////////////////////////////
*/

/*


        <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            aria-label="scrollable force tabs example">
          <Box sx={{}}>
              <TabsList>
                <Tab>Interesting Bytes</Tab>
                <Tab>Maths</Tab>
                <Tab>Physics</Tab>
                <Tab>Chemistry</Tab>
                <Tab>Biology</Tab>
                <Tab>Python</Tab>
                <Tab>Github</Tab>
                <Tab>Recommendations</Tab>
                <Tab>Cool things</Tab>
                <Tab>Chemistry</Tab>
                <Tab>Biology</Tab>
                <Tab>Python</Tab>
                <Tab>Github</Tab>
                <Tab>Recommendations</Tab>
                <Tab>Cool things</Tab>
              </TabsList>
          </Box>
            <TabPanel value={0}>First page</TabPanel>
            <TabPanel value={1}>Second page</TabPanel>
            <TabPanel value={2}>Third page</TabPanel>
            <TabPanel value={3}>Third page</TabPanel>
            <TabPanel value={4}>Third page</TabPanel>
            <TabPanel value={5}>Third page</TabPanel>
            <TabPanel value={6}>Third page</TabPanel>
        </Tabs>
*/
