const express=require("express")
const app=express();
const PORT=3000;
app.use(express.static("public"))
app.post("/login",(request,response)=>{
    console.log(request.body)
    response.json({
        ok:true,
        received:request.body,
    })
})
app.listen(PORT,()=>{
    console.log("当前服务运行在3000端口号")
})
