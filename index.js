const express = require ('express')
const bodyParser = require('body-parser')
const app = express();

const config = require('./config')
const user = require('./src/components/user/network.js')
const authRouter = require('./src/components/auth/network.js')

app.use(bodyParser.json())
app.use('/api/user', user);
app.use('/api/auth',authRouter)

app.listen(config.api.port,()=>console.log('todo salio bien',config.api.port)) 
