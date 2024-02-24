const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname,"3-read-from-file.txt"),"utf-8",function(err,data)
{
  if(err)
  {
    console.log(err);
  }
  else{
    console.log(data);
  }
})

let count = 0;
for(let i = 0;i<10000000;i++)
{
  count += i;
}
console.log(count);
count = 0;
for(let i = 0;i<10000000;i++)
{
  count += i;
}
console.log(count);
count = 0;
for(let i = 0;i<10000000;i++)
{
  count += i;
}
console.log(count);