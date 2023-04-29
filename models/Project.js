const mongoose = require("mongoose");
const taskSchema = require("./Task");
const { Schema } = mongoose;
const ProjectSchema = new Schema(
  {
    invitedUsers: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "user",
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
    },
    admin: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const notes = mongoose.model("project", ProjectSchema);
module.exports = notes;
