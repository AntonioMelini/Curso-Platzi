const {Router} = require('express');
const response= require('../../network/response')
const authRouter=Router();
const controller= require('./index');
const error=require('../../network/errors')


authRouter.post('/login',async (req,res)=>{
    try {
        //console.log('entro a /login');
        if(req.body.username && req.body.password){
        let token= await controller.login(req.body.username,req.body.password)
        //console.log();
         if(token=="Error: Informacion invalida") return error(token,req,res,400)
        response.success(req,res,token,200)
        }else error("pls send valid info",req,res,400)
    } catch (err) {
        error(err.message,req,res,400)
    }
    
})

module.exports =authRouter