// HTTP Methods
// GET    - Read Data
// POST   - Insert Data
// PUT    - Update Data
// DELETE - Delete Data

const express = require("express");
const app = express();
const { people } = require("./data");

// static assets
app.use(express.static('./methods-public')) 
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())
  
app.post("/login", (req,res)=>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send("Please provide credentials");
})

app.get("/api/people", (req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.post("/api/people", (req,res)=>{
    const { name } = req.body;
    if(!name){
        return res.status(400).json({success:false,msg: "please provide name value"})
    } 
    res.status(201).json({success:true,person:name});
})

app.post("/api/people/postman", (req,res)=>{
    const { name } = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:"please provide name value"})
    }   
    res.status(201).json({success:true,data:[...people, name]})
})


// PUT - update/modify
// Now in this case,there's 2 things that I'm looking for 
// not only we're looking for that specific item thats why we use the params & i also need to supply this value to the database 
// therefore these 2 are the cases...
// 1. I want to get the value here in the params & remember we access that using the req.params
// 2. When it comes to update when it comes to the put request, im also gonna send something in the body 
app.put("/api/people/:id", (req,res)=>{
    const { id } = req.params;
    const { name } = req.body;
    // first thing
    const person = people.find((person)=>{
        return person.id === Number(id);
    })
    if(!person){
        return res.status(400).json({success:false,msg:`no person with id: ${id}`})
    }
    // now the second thing, if the person does exist then i want to iterate over the array & for that specific person whose id matches my params value ill change the name. 
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name; // so if the id of the person matches to that one in the params then please change the that i can find in the body if not then simply return a person
        }
        return person;
    })
    return res.status(200).json({success:true,data:newPeople});
})

// if the person does exist, then ofcourse ill just filter out the array & remove that person from the array
app.delete("/api/people/:id", (req,res)=>{
    const person = people.find((person)=>{
        return person.id === Number(req.params.id)
    })
    if(!person){
        return res.status(404).json({success:false,msg:`no person with id: ${req.params.id}`})
    }
    // jinka id match nahi hoga req.params.id se unko add kar denge new array mai aur usko print kar denge
    const newPeople = people.filter((person)=>{
        return person.id !== Number(req.params.id); // bec newPeople array mai sirf vahi persons honge jinka id match nahi karta hai req.params.id se
    })
    return res.status(200).json({success:true,data:newPeople})
})

app.listen(5000, ()=>{
    console.log("Server is running on port 5000...");
})