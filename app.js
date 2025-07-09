const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/datastruct-test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Example route
app.get("/", (req, res) => res.send("Data Structure Challenge Running"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
