import { Log } from "../log/Log";
import { Localization } from "../../language/Localization";
import { Response } from "express";


export class BaseController{
    /**
     * Define a Localization Object
     */
    protected localization: Localization;

    /**
     * Define a Logs Object
     * 
     */
    protected log: Log;

    constructor(){
        this.localization = new Localization();
    }

    protected async responseErrorModel(res: Response, error: any): Promise<any>{
        let _statusCode:  number;
        let _message: string;
        let code = error && error.code ? error.code: error;

        switch(code){
            case "MisssingParameter":
                _statusCode = 6000;
                _message = this.localization.t("missing_parameter");
                break;
                default: 
                    _statusCode = 500;
                    _message = this.localization.t("internal_server_error");
        }
        res.json({
            StatusCode: _statusCode,
            Message: _message
        })
    }
}

export default BaseController;