"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  Grid,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import axios from "axios";

const CreateServices = () => {
  const [formData, setFormData] = useState({
    title: "",
    headline: "",
    subheadline: "",
    overview: "",
    programOptions: [""],
    learningPoints: [""],
    programDetails: {
      ageGroup: "",
      format: [""],
      duration: [""],
      location: [""],
    },
    testimonials: [{ author: "", quote: "" }],
    faqs: [{ question: "", answer: "" }],
    heroImage: null,
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleArrayChange = (arrayField, index, value) => {
    const updatedArray = [...formData[arrayField]];
    updatedArray[index] = value;
    setFormData({ ...formData, [arrayField]: updatedArray });
  };

  const handleNestedArrayChange = (parentField, index, field, value) => {
    const updatedArray = [...formData[parentField]];
    updatedArray[index][field] = value;
    setFormData({ ...formData, [parentField]: updatedArray });
  };

  const addArrayField = (arrayField, defaultValue) => {
    setFormData({
      ...formData,
      [arrayField]: [...formData[arrayField], defaultValue],
    });
  };

  const removeArrayField = (arrayField, index) => {
    const updatedArray = [...formData[arrayField]];
    updatedArray.splice(index, 1);
    setFormData({ ...formData, [arrayField]: updatedArray });
  };

  const handleSubmit = async () => {
    try {
      const formDataToSend = { ...formData };
      if (formData.heroImage) {
        // Handle image upload separately if required
      }
      await axios.post("/api/services", formDataToSend);
      alert("Service created successfully!");
    } catch (error) {
      console.error("Error creating service:", error);
      alert("Failed to create service.");
    }
  };

  return (
    <Box className="p-4 md:p-8">
      <Typography variant="h4" className="font-bold text-center mb-6">
        Create New Service
      </Typography>

      <form className="space-y-6">
        {/* Title */}
        <TextField
          label="Title"
          fullWidth
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />

        {/* Headline */}
        <TextField
          label="Headline"
          fullWidth
          value={formData.headline}
          onChange={(e) => handleChange("headline", e.target.value)}
        />

        {/* Subheadline */}
        <TextField
          label="Subheadline"
          fullWidth
          value={formData.subheadline}
          onChange={(e) => handleChange("subheadline", e.target.value)}
        />

        {/* Overview */}
        <TextField
          label="Overview"
          fullWidth
          multiline
          rows={4}
          value={formData.overview}
          onChange={(e) => handleChange("overview", e.target.value)}
        />

        {/* Program Options */}
        <Box>
          <Typography className="font-bold">Program Options</Typography>
          {formData.programOptions.map((option, index) => (
            <Box key={index} className="flex items-center gap-2 mb-2">
              <TextField
                value={option}
                fullWidth
                onChange={(e) =>
                  handleArrayChange("programOptions", index, e.target.value)
                }
              />
              <IconButton
                onClick={() => removeArrayField("programOptions", index)}
              >
                <Delete />
              </IconButton>
            </Box>
          ))}
          <Button onClick={() => addArrayField("programOptions", "")}>
            Add Option
          </Button>
        </Box>

        {/* Learning Points */}
        <Box>
          <Typography className="font-bold">Learning Points</Typography>
          {formData.learningPoints.map((point, index) => (
            <Box key={index} className="flex items-center gap-2 mb-2">
              <TextField
                value={point}
                fullWidth
                onChange={(e) =>
                  handleArrayChange("learningPoints", index, e.target.value)
                }
              />
              <IconButton
                onClick={() => removeArrayField("learningPoints", index)}
              >
                <Delete />
              </IconButton>
            </Box>
          ))}
          <Button onClick={() => addArrayField("learningPoints", "")}>
            Add Learning Point
          </Button>
        </Box>

        {/* Testimonials */}
        <Box>
          <Typography className="font-bold">Testimonials</Typography>
          {formData.testimonials.map((testimonial, index) => (
            <Box key={index} className="flex items-center gap-2 mb-2">
              <TextField
                label="Author"
                value={testimonial.author}
                onChange={(e) =>
                  handleNestedArrayChange(
                    "testimonials",
                    index,
                    "author",
                    e.target.value
                  )
                }
              />
              <TextField
                label="Quote"
                value={testimonial.quote}
                onChange={(e) =>
                  handleNestedArrayChange(
                    "testimonials",
                    index,
                    "quote",
                    e.target.value
                  )
                }
              />
              <IconButton
                onClick={() => removeArrayField("testimonials", index)}
              >
                <Delete />
              </IconButton>
            </Box>
          ))}
          <Button
            onClick={() =>
              addArrayField("testimonials", { author: "", quote: "" })
            }
          >
            Add Testimonial
          </Button>
        </Box>

        {/* FAQs */}
        <Box>
          <Typography className="font-bold">FAQs</Typography>
          {formData.faqs.map((faq, index) => (
            <Box key={index} className="flex items-center gap-2 mb-2">
              <TextField
                label="Question"
                value={faq.question}
                onChange={(e) =>
                  handleNestedArrayChange("faqs", index, "question", e.target.value)
                }
              />
              <TextField
                label="Answer"
                value={faq.answer}
                onChange={(e) =>
                  handleNestedArrayChange("faqs", index, "answer", e.target.value)
                }
              />
              <IconButton onClick={() => removeArrayField("faqs", index)}>
                <Delete />
              </IconButton>
            </Box>
          ))}
          <Button
            onClick={() => addArrayField("faqs", { question: "", answer: "" })}
          >
            Add FAQ
          </Button>
        </Box>

        {/* Hero Image */}
        <Box>
          <Typography className="font-bold">Header Image</Typography>
          <input
            type="file"
            onChange={(e) =>
              handleChange("heroImage", e.target.files[0])
            }
          />
        </Box>

        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          className="mt-6"
        >
          Create Service
        </Button>
      </form>
    </Box>
  );
};

export default CreateServices;
