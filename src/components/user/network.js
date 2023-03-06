const {Router} = require('express');
const response= require('../../network/response')
const router=Router();
const controller= require('./controller');


router.get('/',(req, res)=>{
    response.success(req,res,controller.list(),200);
})
module.exports =router;