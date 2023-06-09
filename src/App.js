import { Snackbar, Button, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Tooltip  } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close'

function App() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div style={{ backgroundColor: "#E8ECF4", height: "100vh", padding: 10 }}>
      <Tooltip title="To close the button press it" arrow>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default App;
