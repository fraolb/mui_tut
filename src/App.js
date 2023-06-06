import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography, Button } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import Box from "@mui/material/Box";
import { useState } from "react";
import { styled } from "@mui/material";

const CustomizedTypo = styled(Typography)(({theme})=>({
  color: theme.palette.primary.main,
  '&:hover':{
    color: theme.palette.secondary.main
  }
}))

function App() {
  const [theme, setTheme] = useState(true)
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Box bgcolor='bw.main' sx={{height:'100vh'}}>
        <Typography color="primary.main" variant="h1">
          Hello World
        </Typography>
        <Typography color="secondary.main" variant="h1">
          Hello World
        </Typography>
        <Button variant="contained" onClick={()=>setTheme(!theme)}>Submit</Button>
        <CustomizedTypo variant="h1">Jhon Doe</CustomizedTypo>
      </Box>
    </ThemeProvider>
  );
}

export default App;
