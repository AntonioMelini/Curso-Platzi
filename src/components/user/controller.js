const store = require('../../../store/dummy');

const TABLA='user';

function list(){
    return store.list(TABLA);
}
function getOne(id){
    return store.get(TABLA,id);
}
function upsert(data){
    return store.upsert(TABLA,data);
}
function remove(id){
    console.log("entro a remove controler",id);
    return store.remove(TABLA,id);
}
module.exports={
    list,
    getOne,
    upsert,
    remove
}