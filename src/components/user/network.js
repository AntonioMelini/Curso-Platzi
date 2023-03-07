const {Router} = require('express');
const response= require('../../network/response')
const router=Router();
const controller= require('./controller');


router.get('/',async(req, res)=>{
    try {
        console.log("entro a '/'");
        let data= await controller.list();
        response.success(req,res,data,200);
    } catch (error) {
        response.error(req,res,err.message,500)
    }
    
})

router.get('/create',async(req, res)=>{
    try {
        console.log("entro a /create");
        const {id,nombre,edad}=req.body
      
        if(id && nombre && edad){
       
        let data={id,nombre,edad}
        await controller.upsert(data)
        let x= await controller.list()
        response.success(req,res,x,200);
        }else response.error(req,res,'send valid params',400)
    } catch (error) {
        response.error(req,res,error.message,500)
    }
    
})
router.get('/remove/:id',async(req, res)=>{
    try {
        console.log("entro a /remove");
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
        console.log("entro a /:id");
        if(req.params.id){
        let data= await controller.getOne(req.params.id);
        response.success(req,res,data,200);
        }else response.error(req,res,'send valid id',400)
    } catch (error) {
        response.error(req,res,error.message,500)
    }
    
})
module.exports =router;
//