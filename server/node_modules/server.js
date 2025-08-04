// Import packages
import express from "express";
import cors from "cors";
import dotenv from "dotenv";


// Boilerplate Server 

const app = express()

app.use(express.json()) // useful when we make requests, specifically when we start sending data

app.use(cors()) // Cross Origin Resource Sharing - essentially allows our server to responf to clisnes

dotenv.config()// Allow me to configure environments 
// We need a root GET route, and a listener

//Finally to use an environment youwrite it 
console.log("my super secret key is: ", process.env.MY_VERY_SECRET_KEY)
console.log("my super secret password is: ", process.env.MY_SUPER_SECRET_PASSWORD)

app.get("/", function(req,res) {
res.send("You're looking at my root ya nasty");
})

app.listen(8080, function(){

    console.log("Server is running 8080");

})