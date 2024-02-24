const fs = require("fs");
const path = require("path");

function readAndWriteToFile()
{
    fs.readFile(path.join(__dirname,"1-file-cleaner.txt"),"utf-8",function(err,data){
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("****Reading File Data****");
            console.log("Data: "+data);
            data = data.replace(/\s+/g," ");
            console.log("****After Removing White spaces****");
            console.log("Data: "+data);

            fs.writeFile(path.join(__dirname,"1-file-cleaner.txt"),data,"utf-8",function(err)
            {
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    console.log("File written successfully");
                }
            });
        }
    });
}

readAndWriteToFile();