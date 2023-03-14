const auth = require('../../authentication')


module.exports = function checkAuth  (action){
    const middleware = (req,res,next)=>{
        switch(action){
            case 'update':
                // const owner = req.body.id;
                // auth.check.own(req, owner);
                auth.antonio(req,req.body.id)//verifica si hay errores de verificacion
                next();// si no hay error next
                break;
            default:
                next();
        }
    }
    return middleware
}