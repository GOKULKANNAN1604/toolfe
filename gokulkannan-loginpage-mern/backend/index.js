
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8000;
mongoose.connect("mongodb+srv://gokulgokulkannan770:gokul123@cluster0.abpcpsq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected successfully"))
.catch((err) => console.error("Error connecting mongodb", err))


const userSchema = new mongoose.Schema({
  name: String,
  password: String,
});


const User = mongoose.model("User", userSchema);


app.use(bodyParser.json());


app.post("/api/names", (req, res) => {
  const { name, password } = req.body;

  const newUser = new User({ name, password });
  newUser.save((err, user) => {
    if (err) {
      console.error("Error:", err);
      res.status(500).send("Error occurred while saving user data");
    } else {
      console.log("User created:", user);
      res.status(201).send(user);
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
