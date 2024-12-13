'use client';
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
  List,
  ListItem,
  ListItemText,
  Paper,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from 'next-themes';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const { theme, setTheme } = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [data, setData] = useState({
    totalVisitors: 1200,
    activeBlogs: 10,
    comments: 5,
    blogList: [
      { id: 1, title: 'First Blog', comments: 3 },
      { id: 2, title: 'Second Blog', comments: 2 },
    ],
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

  const colors = {
    light: {
      background: '#FAF3E3',
      card: '#FFF8F0',
      textPrimary: '#333333',
      textSecondary: '#6F4E37',
      gradient: 'linear-gradient(to right, #c3965d, #DAB692)',
    },
    dark: {
      background: '#2B2B2B',
      card: '#3E3E3E',
      textPrimary: '#FFFFFF',
      textSecondary: '#C3965D',
      gradient: 'linear-gradient(to right, #c3965d, #8C6D45)',
    },
  };

  const currentColors = theme === 'dark' ? colors.dark : colors.light;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: currentColors.background, color: currentColors.textPrimary }}>
      <AppBar
          position="static"
          sx={{
            bgcolor: theme === "dark" ? "#333333" : "#EDE9E3",
            background: theme === "dark" ? "linear-gradient(to right, #eabf91, #C3965D)" : "linear-gradient(to right, #eabf91, #C3965D)",
          }}
        >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ paddingY: 4 }}>
        {/* Stat Cards */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: currentColors.card, boxShadow: 3, textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h6">Total Visitors</Typography>
                <Typography variant="h4" sx={{ color: currentColors.textSecondary }}>
                  {data.totalVisitors}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: currentColors.card, boxShadow: 3, textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h6">Active Blogs</Typography>
                <Typography variant="h4" sx={{ color: currentColors.textSecondary }}>
                  {data.activeBlogs}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: currentColors.card, boxShadow: 3, textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h6">Comments</Typography>
                <Typography variant="h4" sx={{ color: currentColors.textSecondary }}>
                  {data.comments}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Traffic Data Chart */}
        <Paper
          sx={{
            marginTop: 4,
            padding: 3,
            bgcolor: currentColors.card,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: 2, color: currentColors.textSecondary }}>
            Weekly Traffic
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.trafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#cccccc" />
              <XAxis dataKey="day" stroke={currentColors.textSecondary} />
              <YAxis stroke={currentColors.textSecondary} />
              <Tooltip />
              <Line type="monotone" dataKey="visitors" stroke={currentColors.textSecondary} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Paper>

        {/* Blog Management Section */}
        <Typography variant="h5" sx={{ marginTop: 4, color: currentColors.textSecondary }}>
          Manage Blogs
        </Typography>
        <List>
          {data.blogList.map((blog) => (
            <ListItem
              key={blog.id}
              sx={{
                bgcolor: currentColors.card,
                mb: 1,
                borderRadius: 2,
                boxShadow: 1,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <ListItemText
                primary={blog.title}
                secondary={`Comments: ${blog.comments}`}
                primaryTypographyProps={{ color: currentColors.textPrimary }}
                secondaryTypographyProps={{ color: currentColors.textSecondary }}
              />
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: currentColors.gradient,
                    color: '#FFFFFF',
                    marginRight: 1,
                  }}
                >
                  Edit
                </Button>
                <Button variant="contained" color="error">
                  Delete
                </Button>
              </Box>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default Dashboard;
