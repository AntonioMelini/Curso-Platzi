const auth = require('../../authentication')


module.exports = function checkAuth  (action){
    const middleware = (req,res,next)=>{
        switch(action){
            case 'update':
                // const owner = req.body.id;
                // auth.check.own(req, owner);
                let a=auth.antonio(req,res,req.body.id)//verifica si hay errores de verificacion
                if(!a)next();// si no hay error next
                break;
            default:
                next();
        }
    }
    return middleware
}