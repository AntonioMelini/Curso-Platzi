const {Router} = require('express');
const secure = require('./secure');
const response= require('../../network/response')
const router=Router();
const controller= require('./index');



router.get('/',async(req, res)=>{
    try {
        //console.log("entro a '/'");
        let data= await controller.list();
        response.success(req,res,data,200);
    } catch (error) {
        response.error(req,res,error.message,500)
    }
    
})

router.post('/create',async(req, res)=>{
    try {
       // console.log("entro a /create");
        const body=req.body
      
        if(body.id && body.name ){
        await controller.upsert(body)
        let x= await controller.list()
        response.success(req,res,x,200);
        }else response.error(req,res,'send valid params',400)
    } catch (error) {
        response.error(req,res,error.message,500)
    }
    
})
router.get('/remove/:id',async(req, res)=>{
    try {
       // console.log("entro a /remove");
        const {id}=req.params
       
        if(id ){
        await controller.remove(id)
        let x= await controller.list()
        response.success(req,res,x,200);
        }else response.error(req,res,'send valid id',400)
    } catch (error) {
        response.error(req,res,error.message,500)
    }
    
})
router.get('/get/:id',async(req, res)=>{
    try {
        //console.log("entro a /:id");
        if(req.params.id){
        let data= await controller.getOne(req.params.id);
        response.success(req,res,data,200);
        }else response.error(req,res,'send valid id',400)
    } catch (error) {
        response.error(req,res,error.message,500)
    }
    
})
router.put('/',secure('update'),async(req,res)=>{
    try {
       // console.log("entro a /create");
        const body=req.body
      
        if(body.id  ){
           
        await controller.update(body)
        let x= await controller.list()
        response.success(req,res,x,200);
        }else response.error(req,res,'send valid params',400)
    } catch (error) {
        response.error(req,res,error.message,500)
    }
})
module.exports =router;
//