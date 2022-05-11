const expresse=require("express");
const users=require("../users");
const userRouter= expresse.Router();

userRouter.get("/users",(req,res)=>{
    res.send({users:users});
});

module.export=userRouter;