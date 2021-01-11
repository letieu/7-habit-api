import * as express from 'express'
import { errorMiddleware } from './middlewares'

export default class App {
    public app: express.Application
    public port: number
    public router: express.Route

    constructor (port: number, router: express.Route) {
        this.app = express()
        this.port = port
        this.router = router

        this.config()
        this.route()
    }

    public start () {
        this.app.listen(this.port, () => {
            console.log('~~ App start in: localhost:' + this.port);
        })
    }

    public config () {
        this.app.use(express.json());
    }

    public route () {
        this.app.use('/api', this.router)

        // use at last
        this.app.use(errorMiddleware)
    }
}
