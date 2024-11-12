"use client";
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from 'next/navigation';

const SideBar = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleNavigation = (path) => {
        router.push(path);
        setOpen(false); // Close the drawer after navigation
    };

    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin' },
        { text: 'Users', icon: <GroupIcon />, path: '/admin/users' },
        { text: 'Add Blog', icon: <AddIcon />, path: '/admin/add-blog' },
        { text: 'Add Services', icon: <AddIcon />, path: '/admin/add-services' },
        { text: 'Edit Blog', icon: <EditIcon />, path: '/admin/edit-blog' },
        { text: 'Logout', icon: <ExitToAppIcon />, path: '/logout' },
    ];

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
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
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
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </Box>
    );
};

export default SideBar;