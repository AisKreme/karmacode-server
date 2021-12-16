const { Schema, model } = require("mongoose");

const OrganisationSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
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
      type: String,
    },
    projects: [
      {
        type: Schema.Types.ObjectId,
        ref: "project",
      },
    ],
    contact: {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      links: {
        type: Array,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Organisation = model("organisation", OrganisationSchema);

module.exports = Organisation;
