const { Schema, model } = require("mongoose");

const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    houseNr: {
      type: String,
    },
    zip: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
    description: {
      type: String,
    },
    image: {
      url: {
        type: String,
      },
    },
    organisation: {
      type: Schema.Types.ObjectId,
      ref: "organisation",
    },
  },
  {
    timestamps: true,
  }
);

const Project = model("project", ProjectSchema);

module.exports = Project;
