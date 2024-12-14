"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, TableHead, TableBody, TableRow, TableCell, TablePagination, TextField } from '@mui/material'; // Import MUI components
import { useTheme } from '@mui/material'; // For responsive design

const UserTable = () => {
  const [users, setUsers] = useState([]); // Store user data
  const [page, setPage] = useState(0); // Pagination state
  const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page state
  const [searchQuery, setSearchQuery] = useState(''); // Search query state

  const theme = useTheme(); // Access the current theme (dark or light)

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users'); // Endpoint for fetching user data
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Handle pagination changes
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page to 0 when rows per page is changed
  };

  // Handle search query change
  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Filter users based on search query
  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchQuery) ||
      user.surname.toLowerCase().includes(searchQuery) ||
      user.email.toLowerCase().includes(searchQuery) ||
      user.phone.toLowerCase().includes(searchQuery)
    );
  });

  // Handle delete user
  const handleDelete = async (userId) => {
    try {
      await axios.delete(`/api/users/${userId}`); // Send delete request to API
      setUsers(users.filter((user) => user.id !== userId)); // Remove user from state
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 dark:text-white p-5">
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearch}
        className="mb-5"
        InputLabelProps={{
          className: "text-gray-300", // Adjust label color for dark mode
        }}
        InputProps={{
          className: "dark:bg-gray-800 dark:text-white", // Background and text for input in dark mode
        }}
      />

      <Table className="w-full">
        <TableHead>
          <TableRow className="dark:text-white">
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {filteredUsers
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((user) => (
              <TableRow key={user.id} className="dark:text-white">
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.surname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleDelete(user.id)}
                    className="bg-gradient-to-r from-[#c3965d] via-[#eabf91] to-[#c3965d] text-white font-bold hover:bg-[#c3965d]"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredUsers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className="mt-5 dark:text-white text-gray-800"
      />
    </div>
  );
};

export default UserTable;
