// So we're not gonna do the routing anymore in our app.js, well sort of we'll use the middleware but
// as far as the specific urls we'll handle that in this routes people file by setting up the router
const express = require("express");
const router = express.Router();
const { getPeople,createPerson,createPersonPostman,updatePerson,deletePerson } = require("../controllers/people")


router.get("/", getPeople)

router.post("/", createPerson)

router.post("/postman", createPersonPostman)

// PUT - update/modify
// Now in this case,there's 2 things that I'm looking for 
// not only we're looking for that specific item thats why we use the params & i also need to supply this value to the database 
// therefore these 2 are the cases...
// 1. I want to get the value here in the params & remember we access that using the req.params
// 2. When it comes to update when it comes to the put request, im also gonna send something in the body 
router.put("/:id", updatePerson)

// if the person does exist, then ofcourse ill just filter out the array & remove that person from the array
router.delete("/:id", deletePerson)

// // OR 2nd flavour for setting up the routes
// router.route("/").get(getPeople).post(createPerson);
// router.route("/postman").post(createPersonPostman);
// router.route("/").put(updatePerson).delete(deletePerson);

module.exports = router;