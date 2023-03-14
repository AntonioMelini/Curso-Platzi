const jwtAuth = require('../../authentication')
const bcrypt = require('bcrypt')
const TABLA='auth'

module.exports= function (injectedStore) {
    let store = injectedStore
    if(!store){
        store = require('../../../store/dummy')
    }


    const login=async (username,password)=>{
       // console.log('entro a controler login');
        const data= await store.query(TABLA,username)

        let passwordAuth= await bcrypt.compare(password,data.password)

        if(passwordAuth) return jwtAuth.tokenSign(data)
        throw new Error('Informacion invalida')
        
        
    }



    const upsert=async (data)=>{
        const authData = {
            id:data.id
        }
        if(data.username){
            authData.username= data.username
        }
        if (data.password){
            authData.password =await bcrypt.hash(data.password,5)
        }
        return store.upsert(TABLA, authData)
    }
    const changePassword= async (data)=>{
        //console.log(data,"esta es la data");
        let newPassword = await bcrypt.hash(data.password,5)
        data.password=newPassword
        if(!data.username){
            return store.updateUserPassword(data,TABLA,'')
        }
        return store.updateUserPassword(data,TABLA,'user')
       
    }


    return {
        upsert,
        login,
        changePassword
    }
    
}
