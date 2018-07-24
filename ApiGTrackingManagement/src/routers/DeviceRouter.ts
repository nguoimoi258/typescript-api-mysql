import { BaseRouter } from "../framework/router/BaseRouter";
import { Router, Request, Response, NextFunction } from "express";
import { DeviceController } from "../controllers/DeviceController";

export class DeviceRouter extends BaseRouter{

    constructor(){
        super();
        this.Router = Router();
        this.init();
    }

    private async saveItem(req: Request, res: Response, next: NextFunction): Promise<void>{
        let controller = new DeviceController();
        controller.saveItem(req, res, next);
    }

    private async getItem(req: Request, res: Response, next: NextFunction): Promise<void>{
        let controller = new  DeviceController();
        controller.getItem(req, res, next);
    }

    private async getAllItem(req: Request, res: Response, next: NextFunction): Promise<void>{
        let controller = new DeviceController();
        controller.getAllItem(req, res, next);
    }

    private async deleteItem(req: Request, res: Response, next: NextFunction): Promise<void>{
        let controller =new DeviceController();
        controller.deleteItem(req, res, next);
    }

    protected init(){

        //http://localhost:3000/api/v1.0/device
        this.Router.post('/', this.saveItem);

        //http://localhost:3000/api/v1.0/device?Id=Id
        this.Router.get('/', this.getItem);

        this.Router.get('/list', this.getAllItem);
        this.Router.delete('/', this.deleteItem);
    }
}

export default new DeviceRouter().Router;