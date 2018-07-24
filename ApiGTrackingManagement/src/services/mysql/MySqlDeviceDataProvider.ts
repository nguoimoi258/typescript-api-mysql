import { DeviceDataProvider } from "../../framework/dataprovider/DeviceDataProvider";
import { Device } from "../../models/Device";

export class MySqlDeviceDataProvider extends DeviceDataProvider{
    
    constructor(){
        super();
    }


    public async getItem(id: string): Promise<Device>{
        return new Promise<Device> (async (resolve, reject) => {
            let sqlQuery = "call sp_device_get(?)";
            let params = [id]
            this.mysqlHelper.execute(sqlQuery, params)
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    reject(err);
                })
        });
    }

    public async getAllItem(): Promise<Device[]>{
        return new Promise<Device[]> (async (resolve, reject) =>{
            let sqlQuery = "select * from sys_device";
            this.mysqlHelper.execute(sqlQuery)
                .then((result) => {
                    resolve(result)
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    public async saveItem(device: Device): Promise<any>{
        return new Promise<any>(async (resolve, reject) => {
            let sqlQuery = "call sp_device_save(?,?,?,?)";
            let params = [device.Id, device.DeviceId, device.DeviceType, device.Version]; 
            this.mysqlHelper.execute(sqlQuery, params)
                .then(async (result) => {
                    resolve(result);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    public async deleteItem(id: string): Promise<any>{
        return new Promise<any> (async (resolve, reject) => {
            let sqlQuery = "call sp_device_delete(?)";
            let params = [id];
            this.mysqlHelper.execute(sqlQuery, params)
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    reject(err);
                })
        })
    }
}