const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const auth = require("../middleware/auth");

router.post("/create", async (req, res) => {
  try {
    const { admin, title, key } = req.body;
    const project = await Project.create({
      admin,
      title,
      key,
    });
    if (!project) {
      throw new Error("Something went wrong!");
    }
    return res.status(200).json({
      success: true,
      message: "Project has been created",
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
