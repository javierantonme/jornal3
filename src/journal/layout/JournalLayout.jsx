import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";


export const JournalLayout = ({children}) => {

    const drowerWidth = 240;


  return ( 
    <Box sx={{display: 'flex'}}>

        <NavBar drowerWidth={ drowerWidth } />
        <SideBar drowerWidth={ drowerWidth } />

        <Box 
        component='main'
        sx={{flexGrow: 1, p: 3}}>

            <Toolbar />

            { children }
            

        </Box>

    </Box>
  )
}
