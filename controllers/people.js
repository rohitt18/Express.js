const { people } = require("../data");

const getPeople = (req,res) => {
    res.status(200).json({success:true,data:people})
}

const createPerson = (req,res) => {
    const { name } = req.body;
    if(!name){
        return res.status(400).json({success:false,msg: "please provide name value"})
    } 
    res.status(201).json({success:true,person:name});
}

const createPersonPostman = (req,res) => {
    const { name } = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:"please provide name value"})
    }   
    res.status(201).json({success:true,data:[...people, name]})
}

const updatePerson = (req,res) => {
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
}

const deletePerson = (req,res) => {
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
}

module.exports = { getPeople,createPerson,createPersonPostman,updatePerson,deletePerson };