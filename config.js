require('dotenv').config();
const {API_PORT,JWT_SECRET} = process.env


module.exports = {
    api:{
        port: API_PORT  || 3000,
    },
    jwt: {
        secret: JWT_SECRET
    }
}