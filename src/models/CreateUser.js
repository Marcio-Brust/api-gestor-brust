const mongoose = require("mongoose");

const { Schema } = mongoose;

const createUser = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordConfirmation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CreateUser = mongoose.model("CreateUser", createUser);

module.exports = {
  CreateUser,
};
