import fs from "fs";

export  const accesslogs = (req, res, next )=>{
    let logdata = {
        "Time" : new Date().toLocaleString(),
        "Request Type" : req.method,
        'Request URL': req.originalUrl, 
    }
    console.log(logdata);
    fs.appendFile("data.log", JSON.stringify(logdata) + "\n",(err)=>{
        if(err) console.log("Error Received");
    })
    next();
}