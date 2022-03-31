// Express is a minimal & flexible node.js web app framework designed to make developing web apps
// and api's much faster & easier if i have to be honest it's almost unfair how easy & fast it is to  
// spin up the api with the help of express & while its not officially part of node meaning unlike http module
// express is not one of the built-in modules

const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    console.log("user hit the resource");
    res.status(200).send("Home Page");
})
app.get("/about", (req,res)=>{
    res.status(200).send("About Page");
})

app.all("*", (req,res)=>{
    res.status(404).send("<h1>Resource not found</h1>");
})

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000...");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen