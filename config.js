require('dotenv').config();
const {API_PORT} = process.env


module.exports = {
    api:{
        port: API_PORT  || 3000,
    }
}