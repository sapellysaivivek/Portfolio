const express = require("express")
const app = express();
const path = require("path")
app.set("view engine" , "ejs")
app.set("views" , path.resolve("views"))
app.use(express.static("public"))
app.get("/" ,(req,res)=>{
    res.render("index")
})
app.get("/index" ,(req,res)=>{
    res.render("index")
})
app.get("/about" ,(req,res)=>{
    res.render("about")
})
app.get("/Contact" ,(req,res)=>{
    res.render("Contact")
})
app.get("/Project" ,(req,res)=>{
    res.render("Project")
})
app.listen(8000 , ()=>{
    console.log("http://localhost:8000")
})