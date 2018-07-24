import { BaseController } from "../framework/controller/BaseController";
import { IDevcie } from "../interface/ctl/IDevice";
import { LogFactory } from "../framework/log/LogFactory.";
import { DeviceService } from "../services/DeviceService";
import { Request, Response, NextFunction } from "express";

export class DeviceController extends BaseController implements IDevcie{
    /**
     * Define a DeviceService
     */
    private _deviceService: DeviceService;

    constructor(){
        super();
        this.log = LogFactory.create(DeviceController.name);
        this._deviceService = new DeviceService();
    }
     /**
      * Create a Item
      * @param req 
      * @param res 
      * @param next 
      */
    public async saveItem(req: Request, res: Response, next: NextFunction){
        if(!req.query || !req.body){
            this.responseErrorModel(res, "MissingParameter");
        }else{
            let device = req.body;
             
            this._deviceService.saveItem(device)
                .then((result) => {
                    res.json({
                        StatusCode: 200,
                        Message: this.localization.t("success"),
                        Data: result
                    })    
                }).catch((err) => {
                    this.log.error(req, "createItem", err);
                    this.responseErrorModel(res, err);
                    console.log(err);
                });
            }
     }

    public async getItem(req: Request, res: Response, next: NextFunction): Promise<void>{
        if(!req.query || !req.query.Id){
            this.responseErrorModel(res, "MissingParameter");
        }else{
            let id = req.query.Id;

            this._deviceService.getItem(id)
                .then((result)=> {
                    res.json({
                        StatusCode: 200,
                        Message: this.localization.t("sucesss"),
                        Data: result
                    })
                })
                .catch((err) => {
                    this.log.error(req, "getItem", err);
                    this.responseErrorModel(res, err);
                    console.error(err);
                });
        }
    }

    public async getAllItem(req: Request, res: Response, next: NextFunction): Promise<void>{
        
            this._deviceService.getAllItem()
                .then((result) => {
                    res.json({
                        StatusCode: 200,
                        Message: this.localization.t("success"),
                        Data: result
                    })
                })
                .catch((err) =>{
                    this.log.error(req, "getAllItem", err);
                    this.responseErrorModel(res, err);
                    console.log(err);
                });
    }

   
    public async deleteItem(req: Request, res: Response, next: NextFunction): Promise<void>{
        if(!req.query || !req.query.Id){
            this.responseErrorModel(res, "MissingParameter");
        }
        else{
            let id = req.query.Id;
            this._deviceService.deleteItem(id)
                .then((result) => {
                    res.json({
                        StatusCode: 200,
                        Message: this.localization.t("success"),
                        Data: result
                    })
                })
                .catch((err) => {
                    this.log.error(req, "deleteItem", err);
                    this.responseErrorModel(res, err);
                    console.error(err);
                });
        }
    }
}