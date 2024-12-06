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
    <div className="container mx-auto p-6">
      <Box display="flex" justifyContent="space-between" mb={4}>
        <TextField
          label="Search Services"
          variant="outlined"
          value={search}
          onChange={handleSearch}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          className="ml-4 bg-black"
          startIcon={<Add />}
          onClick={handleAddService} // Trigger navigation when clicked
        >
          Add Service
        </Button>
      </Box>

      <TableContainer component={Box} className="shadow-lg rounded-md overflow-hidden">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Subname</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : (
              filteredServices
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((service) => (
                  <TableRow key={service.id}>
                    <TableCell>{service.name}</TableCell>
                    <TableCell>{service.subname}</TableCell>
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
      />
    </div>
  );
};

export default ManageServices;
