// express apps are nothing but a bunch of middleware functions stuffed together to make one nice express cake/desert
const express = require('express')
const app = express()

//  req => middleware => res
// basically middleware will do some kind of functionality and then send out the response

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', logger, (req, res) => {
  // console.log(req.method);
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})



// // express apps are nothing but a bunch of middleware functions stuffed together to make one nice express cake/desert
// const express = require("express");
// const app = express();
// const logger = require("./logger");
// // req => middleware => res 
// // basically middleware will do some kind of functionality and then send out the response
// app.use(logger);

// app.get("/", (req,res)=>{
//     // console.log(req.method);
//     res.send("Home");
// })
// app.get("/about", (req,res)=>{
//     res.send("About");
// })
// app.get("/api/products", (req,res)=>{
//     res.send("Products");
// })
// app.get("/api/items", (req,res)=>{
//     res.send("Items");
// })

// app.listen(5000, ()=>{
//     console.log("Server running on port 5000...");
// })