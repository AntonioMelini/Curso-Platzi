const db= {
    user:[
        {id:'1',nombre:'antonio',edad:'21'},
        {id:'2',nombre:'pedro',edad:'23'},
        {id:'3',nombre:'juana',edad:'31'},
        {id:'4',nombre:'maria',edad:'29'}
    ]
    
}

    async function list (tabla){
        return db[tabla]
    }


    async function get(tabla,id){
        let col= await list(tabla)
        return col.filter(item=>item.id===id) || null
    }
    async function upsert(tabla,data){
        db[tabla].push(data)
        console.log(db[tabla]);
        return data
    } 
    async function remove(tabla,id){
        console.log("entro a remove store",id);
        db[tabla]= db[tabla].filter(users=>users.id!==id)
        return db[tabla]
    }

module.exports={
    list,
    get,
    upsert,
    remove
}