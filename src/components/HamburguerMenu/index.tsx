import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from 'react';

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab') {
        return;
      }
      setIsOpen(open);
    };
  
    return (
        <Container maxWidth="lg" disableGutters={true} sx = {{flexGrow: 1, fontWeight: 700}}>

  
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              sx={{
                position: 'absolute', 
                top: 20, 
                right: 20, 
                zIndex: 1000, 
                display: {
                  xs: 'block',
                  sm: 'none',
                },
                color: '#819fffff',
              }}
            >
              <MenuIcon />
            </IconButton>
  
            <Drawer
              anchor="right"
              open={isOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{
                  p: 2,
                  height: 1,
                  backgroundColor: "white"
                }}
              >
                <IconButton sx={{ mb: 2 }}>
                  <CloseIcon onClick={toggleDrawer(false)} />
                </IconButton>
  
                <Divider sx={{ mb: 2 }} />
  
                <Box sx={{ mb: 2 }}>
                  <ListItemButton>
                    <ListItemText primary="QUIÉNES SÓMOS" sx= {{color:'#2E4D83FF'}}/>
                  </ListItemButton>
  
                  <ListItemButton>
                    <ListItemText primary="CONTÁCTANOS" sx= {{color:'#2E4D83FF'}} color='#2E4D83FF' />
                  </ListItemButton>
                </Box>
    
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translate(-50%, 0)"
                  }}
                >
                </Box>
              </Box>
            </Drawer>
        </Container>
    );
  };
  
  export default HamburgerMenu;