const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://zahmoulovski:Sb5oj2RJbLWVdCil@cluster.gzxzi66.mongodb.net/contactList?retryWrites=true&w=majority"
    );
    console.log("db is connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
