const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    confirmPassword: {
      type: String,
    },
    image: {
      type: String,
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

const UserModel = model("user", UserSchema);

module.exports = UserModel;
