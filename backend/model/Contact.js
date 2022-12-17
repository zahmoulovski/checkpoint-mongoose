const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  firstname: String,
  name: String,
  description: String,
  age: Number,
  phone: String,
  email: {
    type: String,
    required: true,
    unique: false,
  },
});

module.exports = mongoose.model("contacts", ContactSchema);
