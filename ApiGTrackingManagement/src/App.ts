import * as express from 'express';
import * as bodyParser from 'body-parser';
import AppConfigurations from './AppConfigurations';
import { Localization } from './language/Localization';
import { Log } from './framework/log/Log';
import { LogFactory } from './framework/log/LogFactory.';
import  DeviceRouter  from './routers/DeviceRouter';


class App {
    /**
     * Define new Express Application
     */

    public Express: express.Application;

    /**
     * Define new Localication object
     */
    private _localization: Localization;

    /**
     * Define new Log object
     */
    private _log: Log;

    /**
     * Initializies App object
     */
    constructor() {
        this.Express = express();
        this.middleware();
        this.routes();

        this._localization = new Localization();
        this._log = LogFactory.create(App.name);
    }

    private routes(): void {
        this.Express.get('/' , (req, res, next) => {
            res.send("Wellcome to troidat.com");
        });

        this.Express.use(AppConfigurations.PATH_BASE + AppConfigurations.PATH_VERSIONING + AppConfigurations.PATH_DEVICE, (req, res, next) => {
            DeviceRouter(req, res, next);
        });

    }

    private middleware(): void {
        this.Express.use(bodyParser.json({limit: '50mb'}));
        this.Express.use(bodyParser.urlencoded({
            extended: false,
            limit: '50mb'
        }));

        /**
         *  Set Access 
        */
        this.Express.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        if ('OPTIONS' == req.method) {
           res.sendStatus(200);
         }
         else {
           next();
         }});

    }
}

export default new App().Express;