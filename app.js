// HTTP Methods
// GET    - Read Data
// POST   - Insert Data
// PUT    - Update Data
// DELETE - Delete Data

const express = require("express");
const app = express();
const people = require("./routes/people")
const auth = require("./routes/auth")
// static assets
app.use(express.static('./methods-public')) 
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

// setting up the base route as '/api/people' for people.js ruoter
app.use("/api/people", people);

app.use("/login", auth)

app.listen(5000, ()=>{
    console.log("Server is running on port 5000...");
})