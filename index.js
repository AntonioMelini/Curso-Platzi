const express = require ('express')
const app = express();

const config = require('./config')
const user = require('./src/components/user/network.js')

app.use('/api/user', user);

app.listen(config.api.port,()=>console.log('todo salio bien'))
