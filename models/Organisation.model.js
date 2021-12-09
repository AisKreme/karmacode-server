const { Schema, model } = require("mongoose");

const OrganisationSchema = new Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
    },
    street: {
      type: String,
    },
    zip: {
      type: String,
    },
    city: {
      type: String,
    },
    description: {
      type: String,
    },
    picture: {
      links: {
        type: Array,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Organisation = model("Organisation", organisationSchema);

module.exports = Organisation;
