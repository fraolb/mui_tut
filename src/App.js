import { Snackbar, Button, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,  } from "@mui/material";
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
      <Button variant="contained" onClick={handleClick}>Open Dialog</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Simple Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a simple dialog example.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
