"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isCategory, setIsCategory] = useState(true);
  const [categoryName, setCategoryName] = useState("");
  const [subcategoryName, setSubcategoryName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/category/list");
      if (response.data.success) {
        setCategories(response?.data?.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleAddCategory = async () => {
    try {
      await axios.post("/api/category/add-category", { name: categoryName, isActive });
      setCategoryName("");
      alert("Category added successfully");
      fetchCategories();
      setDialogOpen(false);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const handleAddSubcategory = async () => {
    try {
      await axios.post("/api/category/add-subcategory", {
        categoryId: selectedCategory,
        name: subcategoryName,
      });
      setSubcategoryName("");
      alert("Subcategory added successfully");
      fetchCategories();
      setDialogOpen(false);
    } catch (error) {
      console.error("Error adding subcategory:", error);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`/api/category/delete/${id}`);
      alert("Category deleted successfully");
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const paginatedCategories = categories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 bg-opacity-25 dark:bg-[#122031] min-h-screen">
      <h1 className="text-3xl font-semibold mb-8 text-black dark:text-white">Manage Categories</h1>

      <button
        onClick={() => {
          setIsCategory(true);
          setDialogOpen(true);
        }}
        className="px-6 py-3 mb-4 bg-gradient-to-r from-[#c3965d] via-[#eabf91] to-[#c3965d] text-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
      >
        Add Category
      </button>

      <button
        onClick={() => {
          setIsCategory(false);
          setDialogOpen(true);
        }}
        className="px-6 py-3 mb-4 ml-4 bg-gradient-to-r from-[#c3965d] via-[#eabf91] to-[#c3965d] text-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
      >
        Add Subcategory
      </button>

      {/* Dialog for adding category or subcategory */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        className="backdrop-blur-sm"
         aria-labelledby="responsive-dialog-title"
         fullScreen={fullScreen}
      >
        <DialogTitle className="text-gray-800 dark:text-gray-200">
          {isCategory ? "Add Category" : "Add Subcategory"}
        </DialogTitle>
        <DialogContent className="bg-gray-50 dark:bg-gray-800" dividers>
          {isCategory ? (
            <>
              <label className="block mb-2 text-gray-700 dark:text-gray-200">Category Name</label>
              <input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="w-full px-4 py-2 mb-4 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                  className="mr-2"
                />
                Active
              </label>
            </>
          ) : (
            <>
              <FormControl fullWidth className="mb-4">
                <InputLabel id="select-category-label">Select Category</InputLabel>
                <Select
                  labelId="select-category-label"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md"
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <label className="block mb-2">Subcategory Name</label>
              <input
                type="text"
                value={subcategoryName}
                onChange={(e) => setSubcategoryName(e.target.value)}
                className="w-full px-4 py-2 mb-4 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </>
          )}
        </DialogContent>
        <DialogActions className="text-center">
          <Button onClick={() => setDialogOpen(false)} className="text-gray-600 dark:text-gray-400">
            Cancel
          </Button>
          <Button
            onClick={isCategory ? handleAddCategory : handleAddSubcategory}
            className="bg-gradient-to-r from-[#c3965d] via-[#eabf91] to-[#c3965d] text-white rounded-lg px-4 py-2 hover:shadow-lg hover:scale-105"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Category Table */}
      {categories.length === 0 ? (
        <div className="text-center text-gray-700 dark:text-gray-300 mt-6">
          <h2>No categories available. Please add a category.</h2>
        </div>
      ) : (
        <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Category Name</th>
              {/* <th className="px-6 py-3 text-left">Subcategories</th> */}
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCategories.map((category, index) => (
              <tr
                key={category.id}
                className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-gray-100 dark:bg-gray-900"}
              >
                {/* Calculate the "global" index based on the current page and items per page */}
                <td className="px-6 py-4">{(currentPage - 1) * itemsPerPage + (index + 1)}</td>
                <td className="px-6 py-4">{category.category_name}</td>
                {/* <td className="px-6 py-4">
          {category.subcategories?.map((sub) => sub.name).join(", ")}
        </td> */}
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDeleteCategory(category.id)}
                    className="text-red-500 hover:underline"
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      )}

      {/* Pagination */}
      {categories.length > 10 && (
        <div className="mx-auto w-auto">
          <Pagination
            count={Math.ceil(categories.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            className="mt-4 "
          />
        </div>

      )}
    </div>
  );
}
