const express= require("express");
const bodyParser=require("body-parser");
const app= express();
var items=["cook food" ,"eat food " ]; 
var workItem=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/" ,function(req,res){
  var today = new Date();
  var options={weekday:"long", day:"numeric", month:"long"};

  var day= today.toLocaleDateString("en-US", options);

  
  res.render("list", {listTitle: day, newListItem: items});
})
app.post("/", function(req,res){
 let item =req.body.newItem;
    if(req.body.list==="Work"){
    workItem.push(item)
    res.redirect("/work")
 }else{
    items.push(item);
    res.redirect("/");
 }
     
})
    

app.get("/work",function(req, res){
    res.render("list", {listTitle: "Work List", newListItem:workItem})
} )
app.post("/work", function(req, res ){
    let item = req.body.newItem;
    workItem.push(item);
    res.redirect("/work");
})
app.listen(3000, function(){
    console.log("server is runing on port 3000");
})