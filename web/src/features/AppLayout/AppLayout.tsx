import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Outlet,
} from 'react-router-dom';
import StudentsScreen from '../StudentsScreen/StudentsScreen';
import Appointments from '../Taxes/TaxesScreen';
import { useAppDispatch } from '../../store/store';
import { logout, setUser } from '../../store/user/userSlice';

const AppLayout = () => {
    const dispatch = useAppDispatch();

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
                    padding: '0 36px',
                    backgroundColor: '#fafafa',
                    gap: '16px',
                }}
            >
                <Link
                    to='students'
                    style={{
                        textDecoration: 'none',
                        color: '#fff',
                    }}
                >
                    <ListItemButton
                        sx={{
                            borderRadius: 2,
                            backgroundColor: '#3B82F6',
                            '&:hover': {
                                color: 'rgba(0, 0, 0, 0.6)',
                                fontWeight: '700',
                            },
                        }}
                    >
                        <ListItemText primary={'Students'} />
                    </ListItemButton>
                </Link>

                <Link
                    to='appointments'
                    style={{ textDecoration: 'none', color: '#fff' }}
                >
                    <ListItem disablePadding sx={{ textDecoration: 'none' }}>
                        <ListItemButton
                            sx={{
                                borderRadius: 2,
                                backgroundColor: '#F63B3B',
                                '&:hover': {
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    fontWeight: '700',
                                },
                            }}
                        >
                            <ListItemText primary={'Taxes'} />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Button
                    sx={{
                        position: 'absolute',
                        bottom: 20,
                        backgroundColor: '#cecece',
                        color: 'white',
                        '&:hover': {
                            color: 'black',
                        },
                    }}
                    onClick={() => {
                        dispatch(logout());
                    }}
                >
                    Log out
                </Button>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
};

export default AppLayout;
