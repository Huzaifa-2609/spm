const mongoose = require("mongoose");
const taskSchema = require("./Task");
const { Schema } = mongoose;
const ProjectSchema = new Schema(
  {
    invitedUsers: {
      type: [String],
      ref: "user",
      default: [],
    },
    title: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
    tasks: {
      type: [taskSchema],
      required: true,
      default: [],
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);
const project = mongoose.model("project", ProjectSchema);
module.exports = project;
