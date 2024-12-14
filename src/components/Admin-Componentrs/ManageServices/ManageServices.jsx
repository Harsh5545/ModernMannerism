"use client";

import React, { useState, useEffect } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, TextField, IconButton, Button } from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import axios from "axios";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("/api/services");
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/services/${id}`);
      setServices(services.filter((service) => service.id !== id));
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  // Navigate to Add Service page
  const handleAddService = () => {
    router.push("/admin/add-services"); // Replace with the actual path of your Add Service page
  };

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 p-6 min-h-screen">
      <Box display="flex" justifyContent="space-between" mb={4}>
        <TextField
          label="Search Services"
          variant="outlined"
          value={search}
          onChange={handleSearch}
          fullWidth
          className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
        <Button
          variant="contained"
          color="primary"
          className="ml-4 bg-gradient-to-r from-[#c3965d] via-[#eabf91] to-[#c3965d] text-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          startIcon={<Add />}
          onClick={handleAddService} // Trigger navigation when clicked
        >
          Add Service
        </Button>
      </Box>

      <TableContainer component={Box} className="shadow-lg rounded-md overflow-hidden bg-white dark:bg-gray-800">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="text-gray-900 dark:text-white">Name</TableCell>
              <TableCell className="text-gray-900 dark:text-white">Subname</TableCell>
              <TableCell className="text-gray-900 dark:text-white">Status</TableCell>
              <TableCell className="text-gray-900 dark:text-white">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} align="center" className="text-gray-900 dark:text-white">
                  Loading...
                </TableCell>
              </TableRow>
            ) : (
              filteredServices
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((service) => (
                  <TableRow key={service.id}>
                    <TableCell className="text-gray-900 dark:text-white">{service.name}</TableCell>
                    <TableCell className="text-gray-900 dark:text-white">{service.subname}</TableCell>
                    <TableCell>
                      <span className={`badge ${service.isActive ? "bg-green-500" : "bg-red-500"}`}>
                        {service.isActive ? "Active" : "Inactive"}
                      </span>
                    </TableCell>
                    <TableCell>
                      <IconButton color="primary" onClick={() => console.log("Edit", service.id)}>
                        <Edit />
                      </IconButton>
                      <IconButton color="secondary" onClick={() => handleDelete(service.id)}>
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredServices.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className="text-gray-900 dark:text-white"
      />
    </div>
  );
};

export default ManageServices;
