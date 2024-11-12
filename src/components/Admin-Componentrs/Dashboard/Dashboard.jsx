"use client"
import React, { useState, useEffect } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Switch,
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@mui/material';
import { useTheme } from 'next-themes';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const { theme, setTheme } = useTheme();
  const [data, setData] = useState({
    totalVisitors: 1200,
    activeBlogs: 10,
    comments: 5,
    blogList: [],
    trafficData: [
      { day: 'Mon', visitors: 300 },
      { day: 'Tue', visitors: 500 },
      { day: 'Wed', visitors: 200 },
      { day: 'Thu', visitors: 600 },
      { day: 'Fri', visitors: 800 },
      { day: 'Sat', visitors: 1200 },
      { day: 'Sun', visitors: 1500 },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      setData((prev) => ({
        ...prev,
        blogList: [
          { id: 1, title: 'First Blog', comments: 3 },
          { id: 2, title: 'Second Blog', comments: 2 },
        ],
      }));
    };
    fetchData();
  }, []);

  const handleThemeChange = (event) => {
    setTheme(event.target.checked ? 'dark' : 'light');
  };

  return (
    <Box sx={{ display: 'flex', bgcolor: theme === 'dark' ? '#00001F' : '#FFFFFF' }}>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <AppBar position="static" sx={{ bgcolor: theme === 'dark' ? '#933469' : '#D664B6' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ color: '#FFFFFF' }}>Admin Dashboard</Typography>
            <Box sx={{ ml: 'auto' }}>
              {/* <Switch checked={theme === 'dark'} onChange={handleThemeChange} color="default" /> */}
            </Box>
          </Toolbar>
        </AppBar>

        <Container>
          <Grid container spacing={3} sx={{ marginTop: 2 }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ bgcolor: theme === 'dark' ? '#1F1F3B' : '#F4F4F6', color: theme === 'dark' ? '#D664B6' : '#933469' }}>
                <CardContent>
                  <Typography variant="h6">Total Visitors</Typography>
                  <Typography variant="h4">{data.totalVisitors}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ bgcolor: theme === 'dark' ? '#1F1F3B' : '#F4F4F6', color: theme === 'dark' ? '#D664B6' : '#933469' }}>
                <CardContent>
                  <Typography variant="h6">Active Blogs</Typography>
                  <Typography variant="h4">{data.activeBlogs}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ bgcolor: theme === 'dark' ? '#1F1F3B' : '#F4F4F6', color: theme === 'dark' ? '#D664B6' : '#933469' }}>
                <CardContent>
                  <Typography variant="h6">Comments</Typography>
                  <Typography variant="h4">{data.comments}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Traffic Data Graph */}
          <Paper sx={{ mt: 4, p: 3, bgcolor: theme === 'dark' ? '#1F1F3B' : '#F4F4F6' }}>
            <Typography variant="h6" sx={{ color: theme === 'dark' ? '#D664B6' : '#933469' }}>Weekly Traffic</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" stroke={theme === 'dark' ? '#D664B6' : '#933469'} />
                <YAxis stroke={theme === 'dark' ? '#D664B6' : '#933469'} />
                <Tooltip />
                <Line type="monotone" dataKey="visitors" stroke={theme === 'dark' ? '#933469' : '#D664B6'} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>

          {/* Blog Management Section */}
          <Typography variant="h5" sx={{ marginTop: 4, color: theme === 'dark' ? '#D664B6' : '#933469' }}>Manage Blogs</Typography>
          <List>
            {data.blogList.map((blog) => (
              <ListItem key={blog.id} sx={{ bgcolor: theme === 'dark' ? '#1F1F3B' : '#F4F4F6', mb: 1, borderRadius: 1 }}>
                <ListItemText
                  primary={blog.title}
                  secondary={`Comments: ${blog.comments}`}
                  sx={{ color: theme === 'dark' ? '#FFFFFF' : '#333333' }}
                />
                <Button variant="contained" color="primary" sx={{ bgcolor: '#933469', mr: 1 }}>Edit</Button>
                <Button variant="contained" color="secondary" sx={{ bgcolor: '#D664B6' }}>Delete</Button>
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
