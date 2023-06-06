import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  ListItemAvatar, 
  Avatar,
  Collapse
} from "@mui/material";
import DraftIcon from '@mui/icons-material/Drafts'
import { useState } from "react";
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

function App() {
  const [open , setOpen] = useState(false)
  const handleClick=()=>{
    setOpen(!open)
  }
  return (
    <div style={{ backgroundColor: "#E8ECF4", height: "100vh", padding: 10 }}>
      <Box sx={{ maxWidth: 360, bgcolor: "white" }}>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <DraftIcon />
              </ListItemIcon>
              <ListItemText primary="Primary" secondary="secondary" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt='person' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            </ListItemAvatar>
            <ListItemText primary="This is secondary text" />
          </ListItem>
          <ListItem>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={open} timeout="auto">
            <List component="div" disablePadding>
              <ListItem>
                <ListItemText primary="starred" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Box>
    </div>
  );
}

export default App;
