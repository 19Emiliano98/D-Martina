import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@mui/material/Divider';

import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MailIcon from '@mui/icons-material/Mail';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import BedIcon from '@mui/icons-material/Bed';
import CabinIcon from '@mui/icons-material/Cabin';
import KitchenIcon from '@mui/icons-material/Kitchen';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex', position: "absolute",
        paddingBottom: 150,
        borderRight: "1px solid black"
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
                        <ListItem button>
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
                    <Link href="/nosotros" style={{ textDecoration: 'none', color: 'black' }}>
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
                    <Link href="/contacto" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem disablePadding>
                            <ListItemButton>
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
            </div>
            <AppBar position="fixed" className={classes.appBar}>
                {/* Contenido de la barra superior */}
            </AppBar>
        </div>
    );
};

export default Sidebar;

