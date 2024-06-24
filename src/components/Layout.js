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

const drawerWidth = 240;
const navItems = [<Link to="/">Home</Link>, <Link to="/interesting_bytes">Interesting Bytes</Link>, <Link to="/about">About</Link>, <Link to="/contact">Contact</Link>];

function DrawerAppBar(props) {
  const { window } = props;
  const [Open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign:'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <h1 sx={{ textAlign:'center' }}>Combustion is Fun!</h1>

        </Toolbar>
      </AppBar>
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
    </Box>
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