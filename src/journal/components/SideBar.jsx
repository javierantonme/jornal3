import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({ drowerWidth }) => {
  return (
    <Box 
    component='nav'
    sx={{width: {sm: drowerWidth}, flexShrink: {sm: 0}}}
    >

        <Drawer 
        variant='permanent'
        open
        sx={{ 
            display:{ xs: 'block'}, 
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drowerWidth}}}
        >

            <Toolbar >
                <Typography variant = 'h6' noWrap component='div' >Javier Melo</Typography>
            </Toolbar>

            <Divider />

            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map(text =>(
                        <ListItem key={text} disablePadding  >
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={'lorem exgtereknf dkfjdk ndioehfmf kdjdnjd jmdhjjd'}/>
                                </Grid>
                            </ListItemButton>
                            
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>


    </Box>
  )
}