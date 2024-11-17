"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  Grid,
  Paper,
  MenuItem,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const CreateServices = () => {
  const [serviceData, setServiceData] = useState({
    title: "",
    headline: "",
    subheadline: "",
    overview: "",
    heroImage: null,
    programOptions: [""],
    learningPoints: [{ title: "" }],
    testimonials: [{ quote: "", author: "" }],
    faqData: [{ question: "", answer: "" }],
  });

  const handleInputChange = (field, value) => {
    setServiceData({ ...serviceData, [field]: value });
  };

  const handleDynamicInputChange = (field, index, subField, value) => {
    const updatedArray = [...serviceData[field]];
    if (subField) {
      updatedArray[index][subField] = value;
    } else {
      updatedArray[index] = value;
    }
    setServiceData({ ...serviceData, [field]: updatedArray });
  };

  const addDynamicField = (field, defaultValue) => {
    setServiceData({
      ...serviceData,
      [field]: [...serviceData[field], defaultValue],
    });
  };

  const removeDynamicField = (field, index) => {
    const updatedArray = serviceData[field].filter((_, i) => i !== index);
    setServiceData({ ...serviceData, [field]: updatedArray });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setServiceData({ ...serviceData, heroImage: file });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    Object.entries(serviceData).forEach(([key, value]) => {
      if (key === "heroImage") {
        formData.append(key, value);
      } else {
        formData.append(key, JSON.stringify(value));
      }
    });

    try {
      const response = await axios.post("/api/services", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Service Created Successfully!");
    } catch (error) {
      console.error("Error creating service:", error);
      alert("Failed to create service. Please try again.");
    }
  };

  return (
    <Box className="p-6">
      <Typography variant="h4" gutterBottom>
        Create New Service
      </Typography>

      {/* Hero Section */}
      <Paper className="p-4 mb-6">
        <Typography variant="h6" gutterBottom>
          Hero Section
        </Typography>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={serviceData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
        />
        <TextField
          label="Headline"
          fullWidth
          margin="normal"
          value={serviceData.headline}
          onChange={(e) => handleInputChange("headline", e.target.value)}
        />
        <TextField
          label="Subheadline"
          fullWidth
          margin="normal"
          value={serviceData.subheadline}
          onChange={(e) => handleInputChange("subheadline", e.target.value)}
        />
        <Button variant="contained" component="label" className="mt-4">
          Upload Hero Image
          <input type="file" hidden onChange={handleImageUpload} />
        </Button>
      </Paper>

      {/* Overview Section */}
      <Paper className="p-4 mb-6">
        <Typography variant="h6" gutterBottom>
          Overview
        </Typography>
        <TextField
          label="Overview"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={serviceData.overview}
          onChange={(e) => handleInputChange("overview", e.target.value)}
        />
        <Typography variant="subtitle1">Program Options:</Typography>
        {serviceData.programOptions.map((option, index) => (
          <Box className="flex items-center mb-2" key={index}>
            <TextField
              value={option}
              onChange={(e) =>
                handleDynamicInputChange("programOptions", index, null, e.target.value)
              }
              fullWidth
            />
            <IconButton onClick={() => removeDynamicField("programOptions", index)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
        <Button
          startIcon={<AddCircleIcon />}
          onClick={() => addDynamicField("programOptions", "")}
        >
          Add Program Option
        </Button>
      </Paper>

      {/* Learning Points */}
      <Paper className="p-4 mb-6">
        <Typography variant="h6" gutterBottom>
          What They’ll Learn
        </Typography>
        {serviceData.learningPoints.map((point, index) => (
          <Box className="flex items-center mb-2" key={index}>
            <TextField
              label="Title"
              value={point.title}
              onChange={(e) =>
                handleDynamicInputChange("learningPoints", index, "title", e.target.value)
              }
              fullWidth
            />
            <IconButton onClick={() => removeDynamicField("learningPoints", index)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
        <Button
          startIcon={<AddCircleIcon />}
          onClick={() => addDynamicField("learningPoints", { title: "" })}
        >
          Add Learning Point
        </Button>
      </Paper>

      {/* Submit Button */}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Service
      </Button>
    </Box>
  );
};

export default CreateServices;
