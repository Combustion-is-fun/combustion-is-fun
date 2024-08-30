import Header from './Header';
import Footer from './Footer';
import logo from '../logo.svg';
import '../App.css';

import { Link } from "react-router-dom"
// Try to export some of the components to there own file
// remember to commit and npm run deploy 
// what a load of waffel
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const linkcss = {textDecoration: 'none', color: "White", fontSize: "30px", fontFamily: "Times New Roman, Times, serif", fontWeight:"bold"}
const drawerWidth = 240;
const navItems = [<Link to="/" style={linkcss}>Home</Link>, <Link to="/interesting_bytes" style={linkcss}>Interesting Bytes</Link>, <Link to="/about" style={linkcss}>About</Link>, <Link to="/contact" style={linkcss}>Contact</Link>];

function DrawerAppBar(props) {    
  const { window } = props;
  const [Open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{backgroundColor: '#DDD'}}>
      <Divider />
      <List sx={{spacing: "0px"}}>
        {navItems.map((item) => (
          <ListItem key={item} sx={{bgcolor: '#DDD'}}>
            <ListItemButton sx={{ textAlign: 'center', bgcolor: '#1975d1', padding: "2px"}}>
              <ListItemText primary={item}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
            <Box sx={{ display: 'flex'}}>
                <CssBaseline />
                <AppBar>
                    <Toolbar className="AppBar">

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 10 }}>
                            <MenuIcon />
                        </IconButton>
                        <h1>Combustion is Fun!</h1>
        
                    </Toolbar>
                </AppBar>
            </Box>
        </HideOnScroll>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={Open}
          onClose={handleDrawerToggle}>
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ display: 'flex' }}>
        <Toolbar />

      </Box>
    </React.Fragment>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;