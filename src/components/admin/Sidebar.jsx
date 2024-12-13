"use client";

import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box, Switch, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

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
        { text: '', icon: <img src='/assets/MM.png' alt='Logo' style={{ width: '24px', height: '24px' }} />, path: '/admin' },
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin' },
        { text: 'Users', icon: <GroupIcon />, path: '/admin/users' },
        { text: 'Add Blog', icon: <AddIcon />, path: '/admin/add-blog' },
        { text: 'Category', icon: <AddIcon />, path: '/admin/category' },
        { text: 'Manage Services', icon: <EditIcon />, path: '/admin/manage-services' },
        { text: 'Manage Blog', icon: <EditIcon />, path: '/admin/edit-blog' },
        { text: 'Logout', icon: <ExitToAppIcon />, path: '/logout' },
    ];

    const handleThemeChange = (event) => {
        setTheme(event.target.checked ? 'dark' : 'light');
    };

    const getIconColor = () => {
        return theme === 'dark' ? 'white' : 'black';
    };

    return (
        <Box sx={{ display: 'flex' }}>
            {/* Hamburger Menu for Mobile */}
            <IconButton onClick={toggleDrawer} color="inherit" sx={{ display: { xs: 'block', md: 'none' } }}>
                <MenuIcon />
            </IconButton>

            {/* Full Sidebar for Desktop */}
            <Box sx={{ display: { xs: 'none', md: 'block' }, width: 250 }}>
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem key={index} onClick={() => handleNavigation(item.path)}>
                            <ListItemIcon>
                                {React.cloneElement(item.icon, { color: getIconColor() })}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                    <ListItem>
                        <ListItemText primary="Toggle Theme" />
                        <Switch checked={theme === 'dark'} onChange={handleThemeChange} />
                    </ListItem>
                </List>
            </Box>

            {/* Drawer for Mobile */}
            <Drawer anchor="left" open={open} onClose={toggleDrawer}>
                <div style={{ width: 250 }}>
                    <IconButton onClick={toggleDrawer} style={{ float: 'right' }}>
                        <CloseIcon />
                    </IconButton>
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem button key={index} onClick={() => handleNavigation(item.path)}>
                                <ListItemIcon>
                                    {React.cloneElement(item.icon, { color: getIconColor() })}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                        <ListItem>
                            <ListItemText primary="Toggle Theme" />
                            <Switch checked={theme === 'dark'} onChange={handleThemeChange} />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </Box>
    );
};

export default SideBar;
