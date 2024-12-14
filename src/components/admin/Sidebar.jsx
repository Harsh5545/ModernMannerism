"use client";

import React, { useState } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Box,
    Switch,
    Typography,
    Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Lato } from "next/font/google";
import { doLogout } from '@/app/actions';

// Import Lato font
const lato = Lato({
    subsets: ["latin"],
    weight: ["400"], // Use appropriate weights if needed
});

const SideBar = () => {
    const [open, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const router = useRouter();

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleNavigation = (path) => {
        router.push(path);
        setOpen(false);
    };

    const menuItems = [
        { text: '', icon: <img src="/assets/MM.png" alt="Logo" style={{ width: '150px', height: '48px', borderRadius: '8px' }} />, path: '/admin' },
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin' },
        { text: 'Users', icon: <GroupIcon />, path: '/admin/users' },
        { text: 'Add Blog', icon: <AddIcon />, path: '/admin/add-blog' },
        { text: 'Category', icon: <AddIcon />, path: '/admin/category' },
        { text: 'Manage Services', icon: <EditIcon />, path: '/admin/manage-services' },
        { text: 'Manage Blog', icon: <EditIcon />, path: '/admin/edit-blog' },
        { text: 'Logout', icon: <ExitToAppIcon />, path: '/' },
    ];

    const handleThemeChange = (event) => {
        setTheme(event.target.checked ? 'dark' : 'light');
    };

    const getIconColor = () => (theme === 'dark' ? '#c3965d' : '#333'); // Golden for dark, black for light.

    return (
        <Box sx={{ display: 'flex', backgroundColor: theme === 'dark' ? '#121212' : '#ffffff' }}>
            {/* Hamburger Menu for Mobile */}
            <IconButton onClick={toggleDrawer} sx={{ display: { xs: 'block', md: 'none' } }}>
                <MenuIcon sx={{ color: getIconColor() }} />
            </IconButton>

            {/* Full Sidebar for Desktop */}
            <Box
                sx={{
                    display: { xs: 'none', md: 'block' },
                    width: 250,
                    backgroundColor: theme === 'dark' ? '#1F1F1F' : '#F8F8F8',
                    borderRadius: '8px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                }}
            >
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem
                            key={index}
                            onClick={() => handleNavigation(item.path)}
                            sx={{
                                borderRadius: '8px',
                                '&:hover': {
                                    backgroundColor: theme === 'dark' ? '#333' : '#f5f5f5',
                                    transition: 'background-color 0.3s ease',
                                },
                            }}
                        >
                            <ListItemIcon>
                                {React.cloneElement(item.icon, { sx: { color: getIconColor() } })}
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontFamily: lato.style.fontFamily,
                                            color: getIconColor(),
                                        }}
                                    >
                                        {item.text}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                    <Divider sx={{ my: 2 }} />
                    <ListItem>
                        <ListItemText
                            primary={
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontFamily: lato.style.fontFamily }}
                                >
                                    Toggle Theme
                                </Typography>
                            }
                        />
                        <Switch checked={theme === 'dark'} onChange={handleThemeChange} />
                    </ListItem>
                    <ListItem onClick={() => doLogout()}>
                        <ListItemText
                            primary={
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontFamily: lato.style.fontFamily }}
                                >
                                    Logout
                                </Typography>
                            }
                        />
                        
                    </ListItem>
                </List>
            </Box>

            {/* Drawer for Mobile */}
            <Drawer anchor="left" open={open} onClose={toggleDrawer}>
                <div
                    style={{
                        width: 250,
                        backgroundColor: theme === 'dark' ? '#1F1F1F' : '#F8F8F8',
                    }}
                >
                    <IconButton onClick={toggleDrawer} sx={{ float: 'right' }}>
                        <CloseIcon sx={{ color: getIconColor() }} />
                    </IconButton>
                    <List sx={{cursor:'pointer'}}>
                        {menuItems.map((item, index) => (
                            <ListItem
                                button
                                key={index}
                                onClick={() => handleNavigation(item.path)}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: theme === 'dark' ? '#333' : '#f5f5f5',
                                        transition: 'background-color 0.3s ease',
                                    },
                                    cursor: 'pointer'
                                }}
                            >
                                <ListItemIcon>
                                    {React.cloneElement(item.icon, { sx: { color: getIconColor() } })}
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                fontFamily: lato.style.fontFamily,
                                                color: getIconColor(),
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {item.text}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                        <Divider sx={{ my: 2 }} />
                        <ListItem>
                            <ListItemText
                                primary={
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontFamily: lato.style.fontFamily }}
                                    >
                                        Toggle Theme
                                    </Typography>
                                }
                            />
                            <Switch checked={theme === 'dark'} onChange={handleThemeChange} />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </Box>
    );
};

export default SideBar;
