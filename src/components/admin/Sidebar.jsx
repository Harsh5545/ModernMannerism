"use client";

import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box, Switch } from '@mui/material';
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
    const { theme, setTheme } = useTheme(); // Use next-themes
    const router = useRouter();

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleNavigation = (path) => {
        router.push(path);
        setOpen(false); // Close the drawer after navigation
    };

    const menuItems = [
        {text:'', icon:'/assets/MM.pmg', path:'/admin'},
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin' },
        { text: 'Users', icon: <GroupIcon />, path: '/admin/users' },
        { text: 'Add Blog', icon: <AddIcon />, path: '/admin/add-blog' },
        // {text:'Add Service', icon:<AddIcon />, path:"/admin/add-services"},
        { text: 'Category', icon: <AddIcon />, path: '/admin/category' },
        { text: 'Manage Services', icon: <EditIcon />, path: '/admin/manage-services' },
        { text: 'Manage Blog', icon: <EditIcon />, path: '/admin/edit-blog' },
        { text: 'Logout', icon: <ExitToAppIcon />, path: '/logout' },
    ];

    const handleThemeChange = (event) => {
        setTheme(event.target.checked ? 'dark' : 'light');
    };

    // Function to get the icon color based on the theme
    const getIconColor = () => {
        return theme === 'dark' ? 'white' : 'black'; // Change colors as needed
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
                        <ListItem button key={index} onClick={() => handleNavigation(item.path)}>
                            <ListItemIcon>
                                {React.cloneElement(item.icon, { style: { color: getIconColor() } })}
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
                                    {React.cloneElement(item.icon, { style: { color: getIconColor() } })}
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