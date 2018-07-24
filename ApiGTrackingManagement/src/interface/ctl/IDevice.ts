import { Request, Response, NextFunction }  from "express";

export interface IDevcie{
    
    saveItem(req: Request, res: Response, next: NextFunction): Promise<void>;
    getAllItem(req: Request, res: Response, next: NextFunction): Promise<void>;
    getItem(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteItem(req: Request, res: Response, next: NextFunction): Promise<void>;
}