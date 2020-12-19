import * as dotenv from 'dotenv'

dotenv.config()

export default {
    port: parseInt(process.env.PORT) || 3000,
    mongo: process.env.MONGO || '',
    jwtSecet: 'adsfadsfhasdf'
}
