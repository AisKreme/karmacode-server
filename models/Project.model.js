const { Schema, model } = require("mongoose");

const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    organisation: {
      type: Schema.Types.ObjectId,
      ref: "Organisation",
    },
  },
  {
    timestamps: true,
  }
);

const Project = model("project", ProjectSchema);

module.exports = Project;
