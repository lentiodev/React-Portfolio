import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { CodeOff as CodeOffIcon } from '@mui/icons-material';

const Link = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
  font-size: 1.7rem;
`;

const Logo = styled('div')`
  display: flex;
  align-items: center;
`;

const TextRed = styled('span')`
  color: #050720;
  font-size: 2.1rem;
`;

const TextYellow = styled('span')`
  color: #5ce0d8;
  font-size: 1.9rem;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <AppBar position="static" color="transparent"  elevation={0}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" sx={{ flexGrow: 1 }}>
            <Logo>
              <IconButton
                component={RouterLink}
                to="/"
                edge="start"
                color="inherit"
                aria-label="CodeOff logo"
                sx={{ mr: 2 }}
              >
                <CodeOffIcon />
              </IconButton>
              <TextRed>lentio</TextRed>
              <TextYellow>.dev</TextYellow>
            </Logo>
          </Link>
        </Container>
        <Container
          maxWidth="lg"
          sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
        >
          <Button component={RouterLink} to="/" color="inherit" sx={{ mr: 2 }}>
            Home
          </Button>
          <Button
            component={RouterLink}
            to="/about"
            color="inherit"
            sx={{ mr: 2 }}
          >
            About
          </Button>
          <Button
            component={RouterLink}
            to="/projects"
            color="inherit"
            sx={{ mr: 2 }}
          >
              Projects
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
            color="inherit"
            variant="outlined"
          >
            Contact
          </Button>
        </Container>
        <IconButton
          onClick={toggleDrawer(true)}
          size="large"
          edge="start"
          color="inherit"
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
          <List sx={{ width: 170,
            textAlign: 'center',
          }}
        >
          <Link to="/" onClick={toggleDrawer(false)}>
            <ListItem >
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link to="/about" onClick={toggleDrawer(false)}>
            <ListItem >
              <ListItemText primary="About" />
            </ListItem>
          </Link>
          <Link to="/projects" onClick={toggleDrawer(false)}>
            <ListItem >
              <ListItemText primary="Projects" />
            </ListItem>
          </Link>
          <Link to="/contact" onClick={toggleDrawer(false)}>
            <ListItem >
              <ListItemText primary="Contact" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

