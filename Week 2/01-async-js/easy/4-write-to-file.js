const fs = require("fs");
const path = require("path");

const data = "Added the text in the file.";

fs.writeFile(path.join(__dirname, "a.txt"), data,"utf-8",function(err){
  if(err)
  {
    console.log(err);
  }
  else
  {
    console.log("File written successfully");
  }
})