import { Drawer, Box, Typography, IconButton, List, ListItem, ListItemText, ListItemButton, Tabs } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Router, Route, Link,  } from 'react-router-dom';

/*
****
Not used in the final app version.
****
*/

function MuiDrawer(){
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div>
            <IconButton 
                size="large" 
                edge="start" 
                color="inherit" 
                aria-label="logo" 
                onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon/>
            </IconButton>
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                >
                <Box p={2} width="250px" textAlign="center" role="presentation">
                    <Typography variant="h6" component="div">
                        PersonalTrainer
                    </Typography>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemText>Customers</ListItemText>
                            </ListItemButton>
                        </ListItem>
                       
                        <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText>Trainings</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </div>
    )
}

export default MuiDrawer;