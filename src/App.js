import { Snackbar, Button, IconButton } from "@mui/material";
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

  const action =(
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="small" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  )
  return (
    <div style={{ backgroundColor: "#E8ECF4", height: "100vh", padding: 10 }}>
      <Button variant="contained" onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="This is snackbar!"
        action={action}
      />
    </div>
  );
}

export default App;
