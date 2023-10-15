import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'

export const NavBar = ({drowerWidth = 240}) => {
  return (
    <AppBar position = 'fixed'
    sx={{ 
        width: { sm: `calc(100% - ${drowerWidth}px)`},
        ml: { sm: `${drowerWidth}px`  }
     }}
    >

        <Toolbar>
            <IconButton
            color='inherid'
            edge='start'
            sx={{ mr: 2,  display: {sm: 'none'}}}
            >
                <MenuOutlined />
            </IconButton>

        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Typography variant='h6' noWrap component='div'> Journal App </Typography>
            <IconButton color='error'>
                <LogoutOutlined />
            </IconButton>

        </Grid>

        </Toolbar>

    </AppBar>
  )
}
