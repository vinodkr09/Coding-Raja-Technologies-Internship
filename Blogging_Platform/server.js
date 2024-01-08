 //importing all packages
 const express = require('express');
 const path = require('path');

 //store "public" folder path to initial_path variable
 let initial_path = path.join(__dirname, "public");

 //initializing the Express server
 const app = express();
 app.use(express.static(initial_path));
 
 app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
 })

 app.listen("3000", () => {
    console.log("Server is running on port 3000")
 })








