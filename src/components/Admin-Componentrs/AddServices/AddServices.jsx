"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  IconButton
} from "@mui/material";
import {  Delete } from "@mui/icons-material";
import axios from "axios";

const CreateServices = () => {
  const [isSuccess, setIsSuccess] = useState(false); // State to show the success box
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle loading state

  const [formData, setFormData] = useState({
    title: "",
    headline: "",
    subheadline: "",
    overview: "",
    programOptions: [""],
    learningPoints: [""],

    programDetails: {
      ageGroup: "",
      age_group_details: "",
      format: [
        {
          fromatOption: "",
          formatAns: "",
        },
      ],
      duration: [
        {
          durationHeading: "",
          durationDetail: "",
        },
      ],

      location: [""],
    },
    testimonials: [{ author: "", quote: "" }],

    faqs: [{ question: "", answer: "" }],
    heroImage: null,
  });
  //   const handleChange = (field, value) => {
  //     setFormData({ ...formData, [field]: value });
  //   };

  const handleArrayChange = (arrayField, index, value) => {
    const updatedArray = [...formData[arrayField]];
    updatedArray[index] = value;
    setFormData({ ...formData, [arrayField]: updatedArray });
  };

  const handleNestedArrayChange = (parentField, index, field, value) => {
    const updatedNestedArray = [...formData[parentField]];
    updatedNestedArray[index][field] = value;
    setFormData({ ...formData, [parentField]: updatedNestedArray });
  };

  const handleProgramDetailsChange = (field, value) => {
    setFormData({
      ...formData,
      programDetails: { ...formData.programDetails, [field]: value },
    });
  };

  const handleNestedProgramDetailChange = (field, index, subField, value) => {
    const updatedDetails = [...formData.programDetails[field]];
    updatedDetails[index][subField] = value;
    setFormData({
      ...formData,
      programDetails: { ...formData.programDetails, [field]: updatedDetails },
    });
  };

  const addArrayField = (arrayField, defaultValue) => {
    setFormData({
      ...formData,
      [arrayField]: [...formData[arrayField], defaultValue],
    });
  };

  const addNestedArrayField = (parentField, field, defaultValue) => {
    const updatedField = [...formData.programDetails[field], defaultValue];
    setFormData({
      ...formData,
      programDetails: { ...formData.programDetails, [field]: updatedField },
    });
  };

  const removeArrayField = (arrayField, index) => {
    const updatedArray = [...formData[arrayField]];
    updatedArray.splice(index, 1);
    setFormData({ ...formData, [arrayField]: updatedArray });
  };

  const removeNestedArrayField = (parentField, field, index) => {
    const updatedField = [...formData.programDetails[field]];
    updatedField.splice(index, 1);
    setFormData({
      ...formData,
      programDetails: { ...formData.programDetails, [field]: updatedField },
    });
  };

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value ?? (field === "location" ? { name: "" } : {}),
//     }));
//   };
 const handleLocationChange = (index, key, value) => {
    const updatedLocations = [...formData.location];
    updatedLocations[index][key] = value; // Update the specific field
    setFormData({ ...formData, location: updatedLocations });
  };

  const addNewLocation = () => {
    setFormData({
      ...formData,
      location: [...formData.location, { name: "", address: "" }],
    });
  };
  const handleSubmit = async () => {
    if (!formData.title || !formData.headline) {
      alert("Title and Headline are required!");
      return;
    }

    try {
      setIsSubmitting(true); // Indicate that the form is submitting
      const formDataToSend = { ...formData };
      // Handle file upload for heroImage if needed
      await axios.post("/api/services", formDataToSend);
      setIsSuccess(true); // Set success to true after successful submission
      setTimeout(() => setIsSuccess(false), 5000); // Hide the success box after 5 seconds
    } catch (error) {
      console.error("Error creating service:", error);
      alert("Failed to create service.");
    } finally {
      setIsSubmitting(false); // End the submitting state
    }
  };
  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };
  return (
    <Box className="p-4 md:p-8">
      <Typography variant="h4" className="font-bold text-center mb-6">
        Create New Service
      </Typography>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
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
        <Box>
          <Typography className="font-bold">This Program Offers:</Typography>
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
          <Button className="text-yellow-600 mt-1" onClick={() => addArrayField("programOptions", "")}>
            Add Option
          </Button>
        </Box>
        {/* What They Learn Options */}
        <TextField
          label="Curriculum Heading"
          fullWidth
          value={formData.subheadline}
          onChange={(e) => handleChange("subheadline", e.target.value)}
        />
        <Box>
          <Typography className="font-bold">Curriculum Options</Typography>
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
          <Button className="text-yellow-600 mt-1" onClick={() => addArrayField("programOptions", "")}>
            Add Option
          </Button>
        </Box>
        {/* Program Options */}
        <Box>
          <Typography className="font-bold">Course Highlights</Typography>
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
          <Button className="text-yellow-600 " onClick={() => addArrayField("programOptions", "")}>
            Add Option
          </Button>
        </Box>

        {/* Program Details  */}
        <Box>
          <Typography className="font-bold">Course details</Typography>

          {/* Learning Points Section */}
          {formData.learningPoints.map((point, index) => (
            <Box key={index} className="flex items-center gap-2 mb-4">
              <TextField
                value={point}
                fullWidth
                onChange={(e) =>
                  handleArrayChange("learningPoints", index, e.target.value)
                }
                className="bg-white dark:bg-gray-700"
              />
              <IconButton
                onClick={() => removeArrayField("learningPoints", index)}
                className="text-red-500"
              >
                <Delete />
              </IconButton>
            </Box>
          ))}
          <Button
            onClick={() => addArrayField("learningPoints", "")}
            className="text-yellow-600 mt-2"
          >
            Add Learning Point
          </Button>

          {/* Program Details: Age Group and Age Group Details */}
          <Box className="mt-6">
            <TextField
              label="Age Group"
              value={formData.programDetails.ageGroup}
              onChange={(e) =>
                handleChange("programDetails", {
                  ...formData.programDetails,
                  ageGroup: e.target.value,
                })
              }
              fullWidth
              className="bg-white dark:bg-gray-700 mb-4"
            />

            <TextField
              label="Age Group Details"
              value={formData.programDetails.age_group_details}
              onChange={(e) =>
                handleChange("programDetails", {
                  ...formData.programDetails,
                  age_group_details: e.target.value,
                })
              }
              fullWidth
              className="bg-white dark:bg-gray-700 mb-4"
            />
          </Box>

          {/* Format Section */}
          <Box className="mt-6">
            <Typography variant="h6">Format:</Typography>
            {formData.programDetails?.format?.map((formatItem, index) => (
              <Box key={index} className="flex items-center gap-2 mb-2">
                <TextField
                  label="Format Option"
                  value={formatItem.formatOption || ""}
                  onChange={(e) =>
                    handleNestedArrayChange(
                      "programDetails",
                      "format",
                      index,
                      "formatOption",
                      e.target.value
                    )
                  }
                  fullWidth
                  className="bg-white dark:bg-gray-700"
                />
                <TextField
                  label="Format Answer"
                  value={formatItem.formatAns || ""}
                  onChange={(e) =>
                    handleNestedArrayChange(
                      "programDetails",
                      "format",
                      index,
                      "formatAns",
                      e.target.value
                    )
                  }
                  fullWidth
                  className="bg-white dark:bg-gray-700"
                />
                <IconButton
                  onClick={() =>
                    removeArrayField("programDetails", "format", index)
                  }
                  className="text-red-500"
                >
                  <Delete />
                </IconButton>
              </Box>
            ))}
            <Button
              onClick={() =>
                addNestedArrayField("programDetails", "format", {
                  formatOption: "",
                  formatAns: "",
                })
              }
              className="text-yellow-600 mt-2"
            >
              Add Format Option
            </Button>
          </Box>

          {/* Duration Section */}
          <Box className="mt-6">
            <Typography variant="h6">Duration Details:</Typography>
            {formData.programDetails?.duration?.map((duration, index) => (
              <Box key={index} className="flex items-center gap-2 mb-4">
                <TextField
                  label="Duration Heading"
                  value={duration.durationHeading}
                  onChange={(e) =>
                    handleNestedProgramDetailChange(
                      "duration",
                      index,
                      "durationHeading",
                      e.target.value
                    )
                  }
                  fullWidth
                  className="bg-white dark:bg-gray-700"
                />
                <TextField
                  label="Duration Detail"
                  value={duration.durationDetail}
                  onChange={(e) =>
                    handleNestedProgramDetailChange(
                      "duration",
                      index,
                      "durationDetail",
                      e.target.value
                    )
                  }
                  fullWidth
                  className="bg-white dark:bg-gray-700"
                />
                <IconButton
                  onClick={() =>
                    removeNestedArrayField("programDetails", "duration", index)
                  }
                  className="text-red-500"
                >
                  <Delete />
                </IconButton>
              </Box>
            ))}
            <Button
              onClick={() =>
                addNestedArrayField("programDetails", "duration", {
                  durationHeading: "",
                  durationDetail: "",
                })
              }
              className="text-yellow-600 mt-2"
            >
              Add Duration
            </Button>
          </Box>

          {/* Location Section */}
           <Box key={'jjjj'} className="mt-6">
      <Typography variant="h6">Location:</Typography>
      <Box>
        {formData.programDetails.location.map((location, index) => (
          <Box key={index} className="flex items-center gap-2 mb-2">
            <TextField
              value={location}
              fullWidth
              onChange={(e) =>
                handleArrayChange("location", index, e.target.value)
              }
            />
            <IconButton
              onClick={() => removeArrayField("location", index)}
            >
              <Delete />
            </IconButton>
          </Box>
        ))}
        <Button className="text-yellow-600 mt-2" onClick={() => addArrayField("location", "")}>
          Add Location
        </Button>
      </Box>
    </Box>
          {/* <TextField
            label={`Location Name ${'jjjj' + 1}`}
            value={loc?.name || ""}
            onChange={(e) =>
              handleLocationChange('index', "name", e.target.value)
            }
          />
          <TextField
            label={`Location Address ${'index' + 1}`}
            value={loc?.address || ""}
            onChange={(e) =>
              handleLocationChange('index', "address", e.target.value)
            }
          />
     */}
           
          </Box>
        
        
        {/* Testimonials */}
        <Box>
          <Typography className="text-yellow-600 mt-2">Testimonials</Typography>
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
          <Button className="text-yellow-600 mt-2"
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
                  handleNestedArrayChange(
                    "faqs",
                    index,
                    "question",
                    e.target.value
                  )
                }
              />
              <TextField
                label="Answer"
                value={faq.answer}
                onChange={(e) =>
                  handleNestedArrayChange(
                    "faqs",
                    index,
                    "answer",
                    e.target.value
                  )
                }
              />
              <IconButton onClick={() => removeArrayField("faqs", index)}>
                <Delete />
              </IconButton>
            </Box>
          ))}
          <Button className="text-yellow-600 mt-2"
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
            onChange={(e) => handleChange("heroImage", e.target.files[0])}
          />
        </Box>

        {/* Submit Button */}
        <Button
          variant="contained"
         
          onClick={handleSubmit}
          className="mt-6  tracking-widest  bg-gradient-to-r from-[#c3965d] via-[#eabf91] to-[#c3965d] font-extrabold text-white"
        >
          Create Service
        </Button>
      </form>
      {/* Dropdown for Success Message */}
      {isSuccess && (
        <div className="success-box">
          <p>Service created successfully!</p>
        </div>
      )}
    </Box>
  );
};

export default CreateServices;
