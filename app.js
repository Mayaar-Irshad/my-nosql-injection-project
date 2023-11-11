const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/nosql-injection-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a Mongoose schema for user data
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Set up Express
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Parse JSON and URL-encoded body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve a simple HTML form at the root for login
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// Handle login submissions - Vulnerable to NoSQL Injection
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Vulnerable NoSQL query
    const user = await User.findOne({ username: username, password: password });

    if (user) {
      res.send("Logged in successfully as " + user.username);
    } else {
      res.status(401).send("Invalid username or password");
    }
  } catch (err) {
    res.status(500).send("Error occurred");
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
