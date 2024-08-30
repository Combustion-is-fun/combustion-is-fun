import * as React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';




export default function SomeTabs() {
const tabscontainer = {
        fontFamily: "Roboto",
        backgroundColor: "transparent",
        overflow: "hidden",
        padding: "0px",
        spacing:"none"}
const tabslist = {
        display: "flex",
        listStyle: 'none',
        "overflowX": "scroll",
        MsOverflowStyle:"none",
        scrollbarWidth:'none',
        '&::WebkitScrollbar': {display: 'none'},
        justifyContent: "left"}
const tab = {
        color: "#000",
        textDecoration: 'none',
        userSelect: 'none',
        backgroundColor: '#f7c98f',
        padding: '0.75em 1em',
        fontSize: "20px",
        whiteSpace: 'nowrap',
        }
const activetab = {
        color: "#000",
        textDecoration: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        backgroundColor: 'transparent',
        padding: '0.75em 1em',
        fontSize: "20px",
        borderBottomStyle: "none"
}
    
const content = {};
const all_content= document.querySelectorAll("content");
    
const tabs= document.querySelectorAll("tab");
//const tabs= document.querySelectorAll("tab");
//index

    

const removeAllActiveClasses = () => {
    tabs.forEach((tab) => {
        tab.classList.remove("active");
    });
};

const [value, setValue] = React.useState(0);

const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue); };

tabs.forEach((tab) => {
    tab.addEventListener('click', () =>
        {removeAllActiveClasses();
         tab.classList.add('active');
    });
});

        return (
            <div>
                <div class="tabs" Value={value} style={tabscontainer} onClick={handleChange} >
                    <nav class="tab-nav">
                        <ul class="tabs-list" role="tablist" aria-orientation="horizontal" style={tabslist}>
                            <li><button Value={1} class="activetab" style={activetab} href="#">tab one</button></li>
                            <li><button Value={2} class="tab" style={tab} href="#">tab two</button></li>
                            <li><button Value={3} class="tab" style={tab} href="#">tab three</button></li>
                            <li><button Value={4} class="tab" style={tab} href="#">tab four</button></li>
                            <li><button Value={5} class="tab" style={tab} href="#">tab five</button></li>
                            <li><button Value={6} class="tab" style={tab} href="#">tab six</button></li>
                            <li><button Value={7} class="tab" style={tab} href="#">tab seven</button></li>
                        </ul>
                    </nav>
                    <div>
                        <div class="content"><p Value={1}>1</p></div>
                        <div class="content"><p Value={2}>2</p></div>                    
                        <div class="content"><p Value={3}>3</p></div>
                        <div class="content"><p Value={4}>4</p></div>
                        <div class="content"><p Value={5}>5</p></div>
                        <div class="content"><p Value={6}>6</p></div>
                        <div class="content"><p Value={7}>7</p></div>
                    </div>
                </div>
            </div>


  );
}










/*
export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ bgcolor: '#FEF1E0' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Item One"><p>hello</p></Tab>
        <Tab label="Item Two" ></Tab>
        <Tab label="Item Three" ></Tab>
        <Tab label="Item Four" ></Tab>
        <Tab label="Item Five" ></Tab>
        <Tab label="Item Six" ></Tab>
        <Tab label="Item Seven" ></Tab>
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
*/
