"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [isActive, setIsActive] = useState(true);

  // Fetch categories on page load
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/category/add-category", {
        name: categoryName,
        isActive,
      });
      setCategories([...categories, response.data]); // Update table
      setCategoryName(""); // Clear form
      setIsActive(true);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  return (
    <div className="p-6 bg-[#933469] bg-opacity-25 dark:bg-[#122031] min-h-screen">
      <h1 className="text-3xl font-semibold mb-8 text-white">Manage Categories</h1>

      <form onSubmit={handleAddCategory} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
            Category Name
          </label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            required
          />
        </div>

        <div className="flex items-center mb-4">
          <label className="text-gray-700 dark:text-gray-200 font-semibold mr-4">
            Active
          </label>
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
            className="form-checkbox h-5 w-5 text-[#933469] dark:text-[#d664b6]"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-[#933469] hover:bg-[#d664b6] text-white rounded-lg"
        >
          Add Category
        </button>
      </form>

      <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left font-semibold text-gray-700 dark:text-gray-200">ID</th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700 dark:text-gray-200">Category Name</th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700 dark:text-gray-200">Status</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-6 py-4 text-gray-700 dark:text-gray-200">{category.id}</td>
              <td className="px-6 py-4 text-gray-700 dark:text-gray-200">{category.name}</td>
              <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                {category.isActive ? "Active" : "Inactive"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
