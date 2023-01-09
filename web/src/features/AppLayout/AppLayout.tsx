import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Outlet,
} from 'react-router-dom';
import StudentsScreen from '../StudentsScreen/StudentsScreen';
import Appointments from '../Appointments/Appointments';

const AppLayout = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                height: '100vh',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '0 24px',
                    backgroundColor: '#cecece',
                }}
            >
                <List>
                    <Link to='students' style={{ textDecoration: 'none' }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={'Students'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to='appointments' style={{ textDecoration: 'none' }}>
                        <ListItem
                            disablePadding
                            sx={{ textDecoration: 'none' }}
                        >
                            <ListItemButton>
                                <ListItemText primary={'Appointments'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
};

export default AppLayout;
