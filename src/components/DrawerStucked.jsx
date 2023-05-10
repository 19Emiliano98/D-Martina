import * as React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

/* -------------- */
/* ----Icons----- */
/* -------------- */
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MailIcon from '@mui/icons-material/Mail';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import BedIcon from '@mui/icons-material/Bed';
import CabinIcon from '@mui/icons-material/Cabin';
import KitchenIcon from '@mui/icons-material/Kitchen';
import MoreVertIcon from '@mui/icons-material/MoreVert';
/* -------------- */


const drawerWidth = 240;

const useStyles = makeStyles({
    drawerPaper: {
        marginTop: "5.76rem"
    }
});


export default function PermanentDrawerLeft() {
    const classes = useStyles();
    return (
        <Box>
            <Drawer
                classes={{ paper: classes.drawerPaper }}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
            <Divider />
                <List>
                    <Link to="/inicio">
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary='Inicio' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <List>
                    <Link to="/nosotros">
                        <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AutoAwesomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary='Sobre Nosotros' />
                                </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary='Contacto' />
                        </ListItemButton>
                    </ListItem>
                </List>
            <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CheckroomIcon />
                            </ListItemIcon>
                            <ListItemText primary='Bazar' />
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <BedIcon />
                            </ListItemIcon>
                            <ListItemText primary='Blanquería' />
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CabinIcon />
                            </ListItemIcon>
                            <ListItemText primary='Camping' />
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <KitchenIcon />
                            </ListItemIcon>
                            <ListItemText primary='Electrodomésticos' />
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MoreVertIcon />
                            </ListItemIcon>
                            <ListItemText primary='Varios' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
}