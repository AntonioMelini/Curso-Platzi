const db= {
    user:[{id:'1',nombre:'antonio',edad:'21'}]}

    function list (tabla){
        return db[tabla]
    }
    function get(tabla,id){
        console.log(id);
        return db[tabla].filter(item=>item.id===id) || null
    }

module.exports={
    list,
    get
}