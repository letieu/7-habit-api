import App from './app'
import router from './routes' 
import * as mongoose from 'mongoose'
import config from './config'
import 'reflect-metadata'

try {
    mongoose.connect(config.mongo, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
} catch (e) {
    console.log('mongoose connect error')
}


const app = new App(config.port, router)
app.start()
