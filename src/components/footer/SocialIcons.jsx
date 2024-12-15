"use client";

import React from 'react';
import { Tooltip, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { motion } from 'framer-motion';

const SocialButtons = () => {
  const iconVariants = {
    hover: {
      scale: 1.2,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="flex space-x-4 items-center justify-center mt-4">
      <Tooltip title="@modernmannerism" arrow>
        <motion.div variants={iconVariants} whileHover="hover">
          <IconButton
            color="secondary"
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
        </motion.div>
      </Tooltip>

      <Tooltip title="YouTube Channel" arrow>
        <motion.div variants={iconVariants} whileHover="hover">
          <IconButton
            color="error"
            href="https://youtube.com"
            target="_blank"
            aria-label="YouTube"
          >
            <YouTubeIcon fontSize="large" />
          </IconButton>
        </motion.div>
      </Tooltip>

      <Tooltip title="LinkedIn Profile" arrow>
        <motion.div variants={iconVariants} whileHover="hover">
          <IconButton
            color="primary"
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </motion.div>
      </Tooltip>

      <Tooltip title="Facebook Page" arrow>
        <motion.div variants={iconVariants} whileHover="hover">
          <IconButton
            color="primary"
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
        </motion.div>
      </Tooltip>
    </div>
  );
};

export default SocialButtons;
