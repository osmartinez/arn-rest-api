const service = require('restana')()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const queryParser = require('connect-query')

service.use(bodyParser.json())
service.use(queryParser())
mongoose.pluralize(null);

require('./routes')(service)

connect()

function listen() {
    service.start(3000).then((server) => {
        console.log(`REST Service up and running on port 3000`)
    })
}

function connect() {
    mongoose.connection.on('error', console.error)
        .on('disconnected', connect)
        .once('open', listen)

    return mongoose.connect('mongodb://localhost/test_sistemaglobalpre', {
        keepAlive: 1,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}