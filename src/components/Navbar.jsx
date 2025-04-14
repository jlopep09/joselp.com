import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { HashLink } from 'react-router-hash-link';

const navItems = ['Sobre_mi', 'Proyectos', 'Estudios'];

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <a href="/">joselp.com</a>
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton component={HashLink} smooth to={"#" + item} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.replace("_", " ")} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key="Docs" disablePadding>
          <a className='w-full text-center align-middle my-2' href="https://joselp-1.gitbook.io/joselp.com">Docs</a>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', width: '100%', overflowX: 'hidden' }}>
      <CssBaseline />
      <AppBar component="nav" position="static" sx={{ width: '100%' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' } }}
          >
            joselp.com
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button key="DOCS" sx={{ color: '#fff' }}>
              <a className='w-full text-center align-middle' href="https://joselp-1.gitbook.io/joselp.com">DOCS</a>
              </Button>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }} component={HashLink} smooth to={"#" + item}>
                {item.replace("_", " ")}
              </Button>
            ))}
            
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Navbar;
