const express = require("express");
const app = express();

app.use((req,res,next)=>{
    console.log("middleware");
    return next();
});

// app.use((req,res,next)=>{
//     req.time = Date.now().toString();
//     console.log(req.method, req.path, req.hostname, req.time);
//     next();
// });

//protect important data
// app.use("/api",(req,res,next)=>{
//     let {token} = req.query;
//     if(token === "giveaccess")
//     {
//         next();
//     }
//     else{
//         res.send("ACCESS DENIED ...!");
//     }
// });

// app.get("/api",(req,res)=>{
//     res.send("Important Data...!");
// })

// or option for proect imp data 
const checkToken = ("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess")
    {
        next();
    }
    else{
        res.send("ACCESS DENIED ...!");
    }
});
app.get("/api",checkToken,(req,res)=>{
    res.send("Important Data...!");
})

app.get("/",(req,res)=>{
    res.send("home route");
});
app.get("demo",(req,res)=>{
    res.send("this is demo route");
});
//404
app.use((req,res)=>{
    res.send("page not found");
});
app.listen(8080,(req,res)=>{
    console.log("server is listing on port 8080");
});
