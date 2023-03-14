
const TABLA='user';
const auth= require('../auth/index')

module.exports= function (injectedStore) {
    let store = injectedStore
    if(!store){
        store = require('../../../store/dummy')
    }

   


function list(){
    return store.list(TABLA);
}
function getOne(id){
    return store.get(TABLA,id);
}
async function upsert(body){
    const user ={
        id:body.id,
        name:body.name,
        username:body.username
    }
    if (body.password && body.username){
        await auth.upsert({
            id: user.id,
            username: user.username,
            password: body.password
        })
    }
    return store.upsert(TABLA,user);
}


async function update(body){
   // console.log(body,"este es el body");
    const user= {
        id:body.id
    }
    if(body.name)  user.name=body.name 
    if(body.username)  user.username=body.username 
    if(body.password){
        await auth.changePassword({
            id:user.id,
            name:user.name,
            username:user.username ,
            password: body.password
        })
    }

}


function remove(id){
    console.log("entro a remove controler",id);
    return store.remove(TABLA,id);
}
return {
    list,
    getOne,
    upsert,
    remove,
    update
}
}
