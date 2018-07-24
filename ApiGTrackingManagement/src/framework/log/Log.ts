import * as fs from 'fs'; 
import {Request} from 'express';
import { TextUtilities } from '../util/TextUtilities';
import { AppConfigurations } from '../../AppConfigurations';


export class Log {
    /**
     * Define a _logfolder
     */
    private _logFolder: string;

    /**
     * Define a _name of log line
     */
    private _name: string;

    /**
     * Private TextUtilities
     */
    private _textUtilities: TextUtilities;

    constructor(name: string) {
        this._name = name;
        this._logFolder = this.getLogFoler();
        this._textUtilities = new TextUtilities();
    }

    private getLogFoler(): string {
        let today = new Date();
        let dd = String(today.getDate());
        let mm = String(today.getMonth()+1);

        var yyyy = today.getFullYear();
        if(parseInt(dd) < 10){
            dd = "0" + String(dd) + "";
        } 
        if(parseInt(mm) < 10){
            mm = "0" + mm;
        } 
        let folder = "" + yyyy + mm + dd;
        if(!fs.existsSync(__dirname + AppConfigurations.APP_DEFAULT_LOG_FOLDER + "/" + folder)) {
            fs.mkdirSync(__dirname + AppConfigurations.APP_DEFAULT_LOG_FOLDER + "/" + folder, "0777");
        }
        return folder;
    }

    private write(folder, filename, level, action, message): void {
        let file = __dirname + AppConfigurations.APP_DEFAULT_LOG_FOLDER + "/" + folder + "/" + filename;
        let writer = fs.createWriteStream(file, {
            encoding: "UTF-8",
            flags : 'a'
        });
        writer.write(this.getCurrentDateTime() + "[" + this._name + "]" + "[" + level + "]" +"[" + action + "]: " + message + "\n");
    }

    private getCurrentDateTime(): string{
        let today = new Date();
        let dd = String(today.getDate());
        let mm = String(today.getMonth()+1);
        var yyyy = today.getFullYear();
        let hour = String(today.getHours());
        let min = String(today.getMinutes());
        let sec = String(today.getSeconds());
        if(parseInt(dd) < 10){
            dd = "0" + String(dd) + "";
        } 
        if(parseInt(mm) < 10){
            mm = "0" + mm;
        } 
        let time = "[" + mm + "/"+ dd + "/" + yyyy + " " + hour + ":" + min + ":" + sec + "]";
        return time;
    }

    private getRequestInfos(req: Request): any {
        let reqInfos = {
            ip: req.header('x-forwarded-for') || req.connection.remoteAddress,
            authorization: req.headers.authorization
        }

        return reqInfos;
    }

    public info(req: Request, action: string, message: any): void {
        let data = this.getRequestInfos(req);
        data.message = message;
        this.write(this._logFolder, AppConfigurations.LOG_FILE_INFO, "[info-level]" , action, this._textUtilities.jsonToString(data));
    }

    public warn(req: Request, action: string, message: any): void {
        let data = this.getRequestInfos(req);
        data.message = message;
        this.write(this._logFolder, AppConfigurations.LOG_FILE_WARNING, "[warning-level]" , action, this._textUtilities.jsonToString(data));
    }

    public debug(req: Request, action: string, message: any): void {
        let data = this.getRequestInfos(req);
        data.message = message;
        this.write(this._logFolder, AppConfigurations.LOG_FILE_DEBUG, "[debug-level]" , action, this._textUtilities.jsonToString(data));
    }

    public error(req: Request, action: string, message: any): void {
        let data = this.getRequestInfos(req);
        data.message = message;
        this.write(this._logFolder, AppConfigurations.LOG_FILE_ERROR, "[error-level]" , action, this._textUtilities.jsonToString(data));
    }

}

export default Log;