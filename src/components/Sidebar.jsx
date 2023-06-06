import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { ListItemButton, Divider, Link } from '@mui/material';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

/* ----------- */
/* ---Icons--- */
/* ----------- */
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MailIcon from '@mui/icons-material/Mail';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import BedIcon from '@mui/icons-material/Bed';
import CabinIcon from '@mui/icons-material/Cabin';
import KitchenIcon from '@mui/icons-material/Kitchen';
import MoreVertIcon from '@mui/icons-material/MoreVert';
/* ----------- */

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex', position: "absolute",
        height: '93vh',
        borderRight: "1px solid #dcd9e8"
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
}));

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.drawer}>
                <List>
                    <Link href="/inicio" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem>
                            <ListItemButton sx={{ mt: -1, mb: -4 }}>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary='Inicio' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <List>
                    <Link href="/nosotros" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem disablePadding>
                                <ListItemButton sx={{ mb: -4 }}>
                                    <ListItemIcon>
                                        <AutoAwesomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary='Sobre Nosotros' />
                                </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <List>
                    <Link href="/contacto" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ mb: -1 }}>
                                <ListItemIcon>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary='Contacto' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link href="/bazar" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ mt: -1, mb: -4 }}>
                                <ListItemIcon>
                                    <CheckroomIcon />
                                </ListItemIcon>
                                <ListItemText primary='Bazar' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <List>
                    <Link href="/blanqueria" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ mb: -4 }}>
                                <ListItemIcon>
                                    <BedIcon />
                                </ListItemIcon>
                                <ListItemText primary='Blanquería' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <List>
                    <Link href="/camping" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ mb: -4 }}>
                                <ListItemIcon>
                                    <CabinIcon />
                                </ListItemIcon>
                                <ListItemText primary='Camping' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <List>
                    <Link href="/electrodomesticos" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ mb: -4 }}>
                                <ListItemIcon>
                                    <KitchenIcon />
                                </ListItemIcon>
                                <ListItemText primary='Electrodomésticos' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <List>
                    <Link href="/varios" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ mb: -4 }}>
                                <ListItemIcon>
                                    <MoreVertIcon />
                                </ListItemIcon>
                                <ListItemText primary='Varios' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </div>
        </div>
    );
};

export default Sidebar;

