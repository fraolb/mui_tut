import { createTheme } from "@mui/material";
import { blue, brown, green } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette:{
        primary:{
            main: green[500]
        },
        secondary:{
            main: brown[500]
        },
        bw:{
            main:'#E8ECF4'
        }
    }
})

export const darkTheme = createTheme({
    palette:{
        primary:{
            main: '#FFFFFF'
        },
        secondary:{
            main: blue[500]
        },
        bw:{
            main:'#000000'
        }
    }
})